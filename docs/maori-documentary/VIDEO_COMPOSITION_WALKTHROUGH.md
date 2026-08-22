# Video Composition Walkthrough - Start Now

**Status**: Ready to compose with 8 scenes (add remaining 7 as they complete)  
**Video Editor**: DaVinci Resolve (free version)  
**Duration**: 2-4 hours for full video

---

## 🚀 QUICK START (5 minutes)

### Step 1: Download DaVinci Resolve
- Go to: https://www.blackmagicdesign.com/products/davinciresolve
- Download FREE version
- Install and launch

### Step 2: Create New Project
1. Click "New Project"
2. Name: `Maori-Documentary-2K`
3. **Project Settings**:
   - Resolution: 2048 x 1152 (2K)
   - Frame Rate: 24 fps
   - Aspect Ratio: 16:9
4. Click "Create"

### Step 3: Import Narration Audio
1. Go to **Media Pool** (left panel)
2. Click **Import Media**
3. Select: `narration_audio.mp3` (from audio generation)
4. Drag to **Audio Track 1** in timeline

### Step 4: Start Composing
- Drag downloaded scenes to **Video Track 1** in sequence
- Adjust timing to match narration
- See detailed steps below

---

## 📥 SCENE IMPORT ORDER (8 Scenes Ready Now)

Import in this exact order to timeline:

```
Timeline Video Track 1:
├─ 00:00-00:30 → Scene 1: Waaka Arrival
├─ 00:30-01:00 → Scene 2: Iwi Settlements
├─ 01:00-01:30 → Scene 3: Whānau Gathering
├─ 01:30-01:50 → Scene 4: Kūmara Gardens
├─ 02:30-02:45 → Scene 7: Whare Construction
├─ 02:45-03:15 → Scene 8: Pā Fortifications
├─ 03:15-03:45 → Scene 9: Whakapapa Genealogy
├─ 03:45-04:15 → Scene 10: Karakia Ceremony
├─ 05:15-05:30 → Scene 13: Haka Performance
└─ 05:30-05:50 → Scene 14: Waiata Singing
```

**Gaps to fill when scenes complete:**
- 01:50-02:10 → Scene 5: Hunting (generating)
- 02:10-02:30 → Scene 6: Kai Moana (generating)
- 04:15-04:45 → Scene 11: Whakairo (generating)
- 04:45-05:15 → Scene 12: Raranga (generating)
- 05:50-06:20 → Scene 15: Hui (generating)
- 06:20-06:50 → Scene 16: Sunset (generating)
- 06:50-07:00 → Scene 17: Stars (generating)

---

## 🎬 DETAILED COMPOSITION STEPS

### A. Download Scenes
```bash
# On your computer, create folder: ~/Maori-Video-Scenes

# Download 8 completed scenes (right-click > Save Image):
1. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135052_ab042f3d-f162-43aa-b4af-85c5ce73e18d.png
2. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135107_b26e5348-b55c-4b24-a7cf-9884490f60b1.png
3. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135113_2a04534a-de4f-43f2-896e-8dcf7f3be9f4.png
4. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135116_66ade78c-aef7-4895-92c0-51e0be117141.png
7. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135156_30da9375-a14f-427b-b7d1-ba3af526b794.png
8. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135207_940c5906-63db-44c6-af45-15138fadaa10.png
9. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135320_51fb5f55-378c-47f1-a23d-ced5ac05071d.png
10. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135220_7de5c282-67f8-4648-9c30-f9d6ea3c170d.png
13. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135311_4b14a2cc-f66f-4c21-8c2f-f27fd9c2647e.png
14. https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135317_c1a0806c-58c2-4c5b-bef6-76e590d6a48e.png
```

### B. Import Scenes to DaVinci Resolve

**In Media Pool:**
1. Click **Import Media**
2. Select all 8 downloaded PNG files
3. Click **Import**

**In Timeline:**
1. **Video Track 1** - Drag scenes in sequence (see order above)
2. **Audio Track 1** - Drag narration audio at start (0:00)

### C. Set Scene Durations (Critical!)

For each scene in timeline:
1. Right-click scene clip
2. Select **Edit Duration**
3. Set duration per timing guide:
   - Scene 1: 30 seconds (0:00-0:30)
   - Scene 2: 30 seconds (0:30-1:00)
   - Scene 3: 30 seconds (1:00-1:30)
   - Scene 4: 20 seconds (1:30-1:50)
   - Scene 7: 15 seconds (2:30-2:45)
   - Scene 8: 30 seconds (2:45-3:15)
   - Scene 9: 30 seconds (3:15-3:45)
   - Scene 10: 30 seconds (3:45-4:15)
   - Scene 13: 15 seconds (5:15-5:30)
   - Scene 14: 20 seconds (5:30-5:50)

### D. Add Transitions Between Scenes

1. **Between Acts** (fade 2-3 seconds):
   - After Scene 3 → Scene 4 (Act 1 to Act 2)
   - After Scene 8 → Scene 9 (Act 2 to Act 3)
   - After Scene 14 → Scene 15 (Act 3 to Act 4)

2. **Within Acts** (dissolve 1-2 seconds):
   - Between all other adjacent scenes

**How to Add:**
1. Drag transition from Effects panel to between clips
2. Select **Dissolve** or **Fade**
3. Adjust duration (1-3 seconds)

### E. Import & Sync Subtitles

1. **File → Import SRT**
2. Select: `maori_bilingual_subtitles.srt`
3. DaVinci automatically syncs to narration timing
4. Adjust font size if needed (View → Subtitles)

### F. Audio Levels (Important!)

1. Select narration audio track
2. Right-click → **Audio Levels**
3. Set to **-18dB to -12dB** (comfortable listening)
4. Play to verify

### G. Export Final Video

1. **File → Export**
2. **Format**: MP4 (H.264)
3. **Resolution**: 2048 x 1152 (2K)
4. **Frame Rate**: 24 fps
5. **Bitrate**: 15-20 Mbps video, 128 kbps audio
6. **Filename**: `Maori-Documentary-Final.mp4`
7. Click **Export**

---

## ⏱️ TIMELINE REFERENCE

Use this to position scenes correctly in DaVinci:

| Time | Scene | Duration | Action |
|------|-------|----------|--------|
| 0:00 | Start Narration | - | Narration begins |
| 0:00-0:30 | Scene 1: Waaka | 30s | Arrival scene |
| 0:30-1:00 | Scene 2: Iwi Settlements | 30s | Aerial view |
| 1:00-1:30 | Scene 3: Whānau | 30s | Family gathering |
| 1:30-1:50 | Scene 5: Hunting | 20s | (generating) |
| 1:50-2:10 | Scene 6: Kai Moana | 20s | (generating) |
| 2:10-2:30 | Scene 4: Kūmara | 20s | Gardens scene |
| 2:30-2:45 | Scene 7: Whare | 15s | Construction |
| 2:45-3:15 | Scene 8: Pā | 30s | Fortifications |
| 3:15-3:45 | Scene 9: Whakapapa | 30s | Genealogy |
| 3:45-4:15 | Scene 10: Karakia | 30s | Ceremony |
| 4:15-4:45 | Scene 11: Whakairo | 30s | (generating) |
| 4:45-5:15 | Scene 12: Raranga | 30s | (generating) |
| 5:15-5:30 | Scene 13: Haka | 15s | Performance |
| 5:30-5:50 | Scene 14: Waiata | 20s | Singing |
| 5:50-6:20 | Scene 15: Hui | 30s | (generating) |
| 6:20-6:50 | Scene 16: Sunset | 30s | (generating) |
| 6:50-7:00 | Scene 17: Stars | 10s | (generating) |

---

## 🎯 COMPOSITION CHECKLIST

- [ ] DaVinci Resolve installed and launched
- [ ] New project created (2K, 24fps, 16:9)
- [ ] 8 scenes downloaded to local folder
- [ ] Narration audio imported to Audio Track 1
- [ ] All 8 scenes imported to Media Pool
- [ ] Scenes arranged in Video Track 1 (correct order)
- [ ] Scene durations set per timing guide
- [ ] Transitions added between scenes
- [ ] Subtitles imported (SRT file)
- [ ] Audio levels adjusted (-18dB to -12dB)
- [ ] Play video preview - verify sync
- [ ] Export as MP4 (2K, 24fps, 15-20 Mbps)

---

## 📝 NEXT STEPS

1. **NOW**: Compose with 8 scenes (gaps for remaining 7)
2. **5-10 min**: Remaining 7 scenes complete → download & insert
3. **Final**: Re-export video with all 17 scenes
4. **Upload**: Share to YouTube

---

## ⚠️ COMMON ISSUES & FIXES

**Scenes not syncing with narration?**
- Check scene durations match timing guide exactly
- Verify narration is at 0:00 start
- Play timeline from beginning

**Audio levels too loud/quiet?**
- Right-click audio track → Audio Levels
- Adjust dB value (-18 to -12 is sweet spot)

**Subtitles not appearing?**
- Verify SRT file imported correctly
- Check subtitle track visibility
- Adjust font size in View menu

**Export taking too long?**
- Lower bitrate to 10 Mbps (still high quality)
- Reduce resolution to 1080p if needed
- Export to SSD (faster than HDD)

---

## 🎬 YOU'RE READY!

**Start DaVinci Resolve now:**
1. Download & install (5 min)
2. Create project (2 min)
3. Import scenes (5 min)
4. Start composing (30 min for rough cut)

**Total time to first preview: ~1 hour**

All documentation, scenes, and guides are ready. Begin composition now while remaining 7 scenes finish generating.

---

**Generated**: 2026-08-22  
**Ready for immediate video editing**
