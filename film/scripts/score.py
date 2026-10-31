#!/usr/bin/env python3
"""Sangat launch film: an ORIGINAL temporary score, synthesised from scratch (no samples, no third-party audio).

It is a placeholder for a licensed track (see README "Audio"). Written to the film's beat sheet:
  0.0  s  scene 1  a tanpura-style drone (Sa and Pa on D) breathes in from silence; one low piano note
  4.0  s  scene 2  piano phrase in raga Bhupali (D E F# A B), a soft wind and water bed
  8.0  s  scene 3  the phrase answers itself, a low string pad enters
 13.0  s  scene 4  strings open into a D add9 chord, piano notes quicken a little
 18.0  s  scene 5  the swell peaks under the pack reveal
 22.0  s  scene 6  one resolving chord and a high bell on the logo, everything decays to silence by 25.0 s

Output: public/sangat/audio/sangat-temp-score.wav (48 kHz, stereo, 16-bit, exactly 25.000 s).
"""
import os
import wave
import numpy as np

SR = 48000
DUR = 25.0
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(7)
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "sangat", "audio", "sangat-temp-score.wav")

SA = 146.83                        # D3
RATIOS = {"S": 1, "R": 9 / 8, "G": 5 / 4, "P": 3 / 2, "D": 5 / 3}   # Bhupali, just intonation


def note(name, octave=0):
    return SA * RATIOS[name] * (2 ** octave)


def env_adsr(n, a, d, s, r, sus_len):
    A, D, R = int(a * SR), int(d * SR), int(r * SR)
    S = max(0, n - A - D - R)
    e = np.concatenate([np.linspace(0, 1, A, endpoint=False), np.linspace(1, s, D, endpoint=False),
                        np.full(S, s), np.linspace(s, 0, R)])
    return e[:n] if len(e) >= n else np.pad(e, (0, n - len(e)))


def place(buf, start, sig, pan=0.0, gain=1.0):
    i = int(start * SR)
    if i >= N:
        return
    sig = sig[: N - i] * gain
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    buf[i:i + len(sig), 0] += sig * l
    buf[i:i + len(sig), 1] += sig * r


def tanpura_pluck(f, dur=3.4):
    """A plucked drone string: many harmonics, the upper ones swelling slightly after the attack (the jawari bloom)."""
    n = int(dur * SR)
    tt = np.arange(n) / SR
    out = np.zeros(n)
    for h in range(1, 22):
        amp = (1 / h ** 1.05) * (1 + 0.9 * np.exp(-((h - 9) ** 2) / 30))
        bloom = 1 - np.exp(-tt * (2 + h * 0.6))
        dec = np.exp(-tt * (0.55 + h * 0.06))
        out += amp * np.sin(2 * np.pi * f * h * tt * (1 + 0.0004 * rng.standard_normal()) + rng.uniform(0, 6.28)) * bloom * dec
    att = np.minimum(1, tt / 0.012)
    return out * att / 6


def piano(f, dur=4.5, bright=1.0):
    """A soft piano-like tone: slightly stretched partials, two-stage decay, a felt-hammer attack."""
    n = int(dur * SR)
    tt = np.arange(n) / SR
    out = np.zeros(n)
    B = 0.0004
    for h in range(1, 14):
        fh = f * h * np.sqrt(1 + B * h * h)
        if fh > 9000:
            break
        amp = (1 / h ** (1.6 / bright)) * (0.6 + 0.4 * np.cos(h))
        dec = 0.65 * np.exp(-tt * (1.1 + h * 0.45)) + 0.35 * np.exp(-tt * (0.35 + h * 0.08))
        detune = 1 + 0.0007 * np.sin(h)
        out += amp * (np.sin(2 * np.pi * fh * tt) + 0.5 * np.sin(2 * np.pi * fh * detune * tt)) * dec
    att = np.minimum(1, tt / 0.004)
    return out * att * 0.28


def strings(freqs, dur, attack=2.5, release=2.5):
    """A soft string pad: band-limited saw-like tones with slow vibrato, detuned pairs, slow swell."""
    n = int(dur * SR)
    tt = np.arange(n) / SR
    out = np.zeros(n)
    for f in freqs:
        for det in (-0.0025, 0.0025):
            vib = 1 + 0.0028 * np.sin(2 * np.pi * (4.8 + rng.uniform(-0.3, 0.3)) * tt + rng.uniform(0, 6.28))
            ph = 2 * np.pi * np.cumsum(f * (1 + det) * vib) / SR
            for h in range(1, 9):
                out += (1 / h ** 1.35) * np.sin(h * ph)
    e = env_adsr(n, attack, 0.5, 0.85, release, 0)
    return out * e / (len(freqs) * 12)


def noise_bed(dur, lp=500, gain=1.0):
    """Wind and distant water: brown noise, low-passed, slowly breathing."""
    n = int(dur * SR)
    w = np.cumsum(rng.standard_normal(n))
    w -= np.convolve(w, np.ones(4800) / 4800, mode="same")
    k = int(SR / lp)
    w = np.convolve(w, np.ones(k) / k, mode="same")
    w /= np.abs(w).max() + 1e-9
    tt = np.arange(n) / SR
    breath = 0.6 + 0.4 * np.sin(2 * np.pi * tt / 5.3) * np.sin(2 * np.pi * tt / 3.1 + 1)
    return w * breath * gain


def reverb(x, decay=2.6, mix=0.32):
    """A simple stereo reverb: a decaying, randomly phased noise impulse convolved through FFT."""
    L = int(decay * SR)
    out = np.zeros_like(x)
    for c in range(2):
        ir = rng.standard_normal(L) * np.exp(-np.arange(L) / SR * (6.9 / decay))
        ir[: int(0.018 * SR)] = 0
        ir /= np.sqrt((ir ** 2).sum())
        m = len(x) + L
        nfft = 1 << (m - 1).bit_length()
        y = np.fft.irfft(np.fft.rfft(x[:, c], nfft) * np.fft.rfft(ir, nfft), nfft)[: len(x)]
        out[:, c] = (1 - mix) * x[:, c] + mix * y
    return out


def main():
    dry = np.zeros((N, 2))
    # tanpura cycle P S S S(low), every 1.15 s, from 0.3 s, fading in over the first 4 s, out at the end
    cyc = [note("P", -1), note("S"), note("S"), note("S", -1)]
    k = 0
    st = 0.3
    while st < 23.5:
        f = cyc[k % 4]
        fade = min(1.0, (st + 0.2) / 4.0) * (1 - max(0.0, (st - 21.0) / 2.5))
        place(dry, st, tanpura_pluck(f), pan=[-0.35, 0.2, 0.3, -0.1][k % 4], gain=0.42 * fade)
        st += 1.15
        k += 1
    # piano: (time, swara, octave, gain)
    melody = [(1.2, "S", 0, 0.55),
              (4.0, "G", 1, 0.6), (4.6, "P", 1, 0.5), (5.3, "D", 1, 0.55), (6.5, "P", 1, 0.5),
              (8.0, "S", 2, 0.55), (8.7, "D", 1, 0.5), (9.4, "P", 1, 0.5), (10.6, "G", 1, 0.55), (11.6, "R", 1, 0.45),
              (13.0, "S", 1, 0.6), (13.5, "G", 1, 0.5), (14.0, "P", 1, 0.5), (14.6, "D", 1, 0.5), (15.4, "S", 2, 0.55),
              (16.4, "D", 1, 0.45), (17.2, "P", 1, 0.45),
              (18.0, "G", 1, 0.6), (18.6, "P", 1, 0.55), (19.3, "S", 2, 0.6), (20.4, "R", 2, 0.5), (21.2, "G", 2, 0.45)]
    for tm, sw, octv, g in melody:
        place(dry, tm, piano(note(sw, octv)), pan=0.15 * np.sin(tm), gain=g)
    # low bass notes on the scene changes
    for tm, sw in [(0.0, "S"), (8.0, "D"), (13.0, "P"), (18.0, "S")]:
        place(dry, tm, piano(note(sw, -1), dur=5, bright=0.6), gain=0.5)
    # string pad from 8 s, opening at 13 s, peaking at ~19 s, releasing into the final chord
    place(dry, 8.0, strings([note("S", -1), note("P", -1)], 6.0, attack=3.0, release=1.5), gain=0.55)
    place(dry, 12.6, strings([note("S", -1), note("P", -1), note("R", 0), note("G", 0)], 7.0, attack=2.5, release=2.0), gain=0.75)
    place(dry, 18.0, strings([note("S", -1), note("P", -1), note("G", 0), note("D", 0), note("S", 1)], 5.2, attack=1.2, release=3.0), gain=0.9)
    # resolution at 22 s: a full low chord, a high bell-like piano note, then silence
    for f, g in [(note("S", -1), 0.6), (note("P", -1), 0.45), (note("G", 0), 0.4), (note("S", 1), 0.4)]:
        place(dry, 22.0, piano(f, dur=3.0, bright=0.8), gain=g)
    place(dry, 22.35, piano(note("G", 2), dur=2.65, bright=1.3), gain=0.35, pan=0.25)
    # wind and water bed, scenes 2 to 4
    bed = noise_bed(14.0, lp=380)
    e = env_adsr(len(bed), 2.0, 0.1, 1.0, 3.0, 0)
    place(dry, 3.5, bed * e, gain=0.05)
    wet = reverb(dry, decay=2.8, mix=0.34)
    # master: gentle fade-in, a 0.6 s fade to digital silence at 25 s, normalise to -3 dBFS
    fade = np.minimum(1, t / 0.08) * np.clip((DUR - t) / 1.4, 0, 1) ** 1.5
    wet *= fade[:, None]
    wet /= np.abs(wet).max() / (10 ** (-3 / 20))
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    pcm = (wet * 32767).astype(np.int16)
    with wave.open(OUT, "wb") as w:
        w.setnchannels(2)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())
    print("wrote", OUT, round(len(pcm) / SR, 3), "s")


if __name__ == "__main__":
    main()
