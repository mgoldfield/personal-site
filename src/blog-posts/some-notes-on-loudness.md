---
title: Some Notes on Loudness
date: 2024-02-20
category: dsp
---

The human ear's sensitivity varies with frequency, leading to the development of [equal-loudness contours](https://en.wikipedia.org/wiki/Equal-loudness_contour). Some notes - 

- We are most sensitive to frequencies between 2-5 kHz
- Low frequencies require more acoustic power to be perceived as equally loud
- The ear's frequency response changes with overall sound level
- Sounds shorter than 200ms are perceived as less loud
- The ear integrates sound energy over roughly 100ms

The [basilar membrane](https://en.wikipedia.org/wiki/Basilar_membrane) in our inner ear acts as a frequency analyzer, dividing incoming sounds into critical bands - 

- Each critical band processes a specific frequency range
- The bandwidth increases with frequency
- Masking effects occur when sounds in the same critical band compete

## Perceptual Coding and Compression Techniques

Modern audio compression leverages psychoacoustic principles, effectively allowing some areas to go out of focus while maintaining clarity on other areas of the sound based on some of the ideas below:  
- Frequency-dependent bit allocation assigns more bits to perceptually important regions
- Masking thresholds determine which sounds can be safely removed without noticeable loss
- Simultaneous masking removes sounds below the masking threshold of louder tones
- Temporal masking exploits the ear's reduced sensitivity before and after loud sounds
- Temporal pre-echo control prevents artifacts in sudden signal onsets
- Stereo redundancy reduction exploits binaural hearing properties to compress stereo signals more efficiently

See [MP3](https://en.wikipedia.org/wiki/MP3), [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding), [FLAC](https://en.wikipedia.org/wiki/FLAC), [Opus](https://en.wikipedia.org/wiki/Opus_(audio_format)) 

## LUFS

[LUFS (Loudness Units Full Scale)](https://www.izotope.com/en/learn/what-are-lufs.html), a measurement unit that represents the perceived loudness of audio content to human ears, is used by streaming platforms to standardize loudness across their libraries. Unlike peak meters that show maximum signal level, LUFS reflects how loud content actually sounds to listeners. Streaming platforms like Spotify and YouTube use LUFS targets, usually around -14 LUFS, to normalize audio levels across their platforms. For music production, most modern DAWs include LUFS meters as well as peak meters. Understanding LUFS is crucial for achieving consistent loudness across different playback systems and meeting platform-specific delivery requirements.

## Loudness Wars of the 90's and Modern Streaming Services 

Audio compression reduces the distance between quiet and loud sounds in a recording. When a signal passes through an audio compressor (as opposed to a data compressor), loud peaks are turned down while quieter sections are boosted. This reduction in dynamic range allows the entire track to be turned up louder without exceeding the maximum level that playback systems can handle. The commercial implications became clear by the mid-1990s. A heavily compressed song could be pushed several decibels louder than a more dynamic recording because its peaks had been tamed. On radio, in stores, and in clubs, these louder songs grabbed more attention.  

The correlation between loudness and commercial success drove an arms race. Songs that were mastered louder initially performed better on Billboard charts, with research suggesting that listeners made judgments about songs within the first 7-10 seconds of airplay. Record labels began explicitly requesting "hot" masters that could compete with or exceed the loudness of other hits. 

The rise of streaming services initially promised to end the loudness war through normalization – automatically adjusting playback volume to a consistent level using the LUFS measurement. However, we are finding new ways to optimize loudness within parameters set by streaming services.

[iZotope's RX](https://www.izotope.com/en/products/rx.html), includes both loudness optimization and streaming preview modules, which I helped develop for RX 11, represent a new approach to loudness within the constraints of streaming services. By analyzing platform-specific algorithms and normalization techniques, these tools allow engineers to maximize perceived loudness while technically staying within streaming services' constraints.