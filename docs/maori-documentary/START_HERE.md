# MĀORI DOCUMENTARY - START COMPOSITION NOW

**Status**: All assets ready | Ready for video composition  
**Date**: 2026-08-22  
**Duration**: 7:00 minutes | 2K resolution  

---

## 🚀 QUICK START (5 MINUTES)

### What You Have Ready
✅ All 17 cinematic scenes (2K, 24fps)  
✅ Narration script (6:45 duration)  
✅ Bilingual subtitles (66 captions)  
✅ Complete DaVinci Resolve guide  
✅ Timeline specifications  
✅ Export settings  

---

## 📋 YOUR COMPOSITION CHECKLIST

**On Your Computer (Local Machine):**

### Phase 1: Download Assets (15 min)
- [ ] Create folder: `~/Maori-Documentary/`
- [ ] Download all 17 scenes (bash script provided below)
- [ ] Generate narration audio via Google Translate TTS (5 min)
- [ ] Copy subtitle file

### Phase 2: DaVinci Setup (10 min)
- [ ] Download DaVinci Resolve (free version)
- [ ] Install and launch
- [ ] Create new project: 2K, 24fps, 16:9

### Phase 3: Import Assets (5 min)
- [ ] Import 17 scenes to Media Pool
- [ ] Drag narration to Audio Track 1
- [ ] Drag scenes 1-17 to Video Track 1

### Phase 4: Set Timings (30 min)
- [ ] Set each scene duration per timing guide
- [ ] Verify total runtime = 7:00

### Phase 5: Add Transitions (20 min)
- [ ] Fade transitions between acts (2-3 sec)
- [ ] Dissolve within acts (1-2 sec)

### Phase 6: Add Subtitles (10 min)
- [ ] Import SRT file
- [ ] Verify sync with narration
- [ ] Adjust font size

### Phase 7: Audio & Export (30 min)
- [ ] Set narration levels (-18dB to -12dB)
- [ ] Export MP4 (2K, 24fps, 15-20 Mbps)
- [ ] Final video: `Maori-Documentary-Final.mp4`

**Total Time**: 2-4 hours

---

## 🎬 ASSET DOWNLOAD SCRIPT

Run this on your computer to download all 17 scenes:

```bash
#!/bin/bash
mkdir -p ~/Maori-Documentary/scenes
cd ~/Maori-Documentary/scenes

# Scenes 1-4 (Act 1-2 Start)
curl -o 01_waaka.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135052_ab042f3d-f162-43aa-b4af-85c5ce73e18d.png"
curl -o 02_iwi_settlements.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135107_b26e5348-b55c-4b24-a7cf-9884490f60b1.png"
curl -o 03_whanau.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135113_2a04534a-de4f-43f2-896e-8dcf7f3be9f4.png"
curl -o 04_kumara.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135116_66ade78c-aef7-4895-92c0-51e0be117141.png"

# Scenes 5-6 (Act 2 Food/Hunting)
curl -o 05_hunting.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_582a0390-8a4d-4296-bf57-f9e7ff0319ab.png"
curl -o 06_kai_moana.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_4e9236e8-dc9b-4061-b6bf-e7677e29aa62.png"

# Scenes 7-10 (Act 2-3 Homes/Culture)
curl -o 07_whare.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135156_30da9375-a14f-427b-b7d1-ba3af526b794.png"
curl -o 08_pa.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135207_940c5906-63db-44c6-af45-15138fadaa10.png"
curl -o 09_whakapapa.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135320_51fb5f55-378c-47f1-a23d-ced5ac05071d.png"
curl -o 10_karakia.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135220_7de5c282-67f8-4648-9c30-f9d6ea3c170d.png"

# Scenes 11-14 (Act 3 Arts/Performance)
curl -o 11_whakairo.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_c89830d9-f464-42d0-9616-d0a9ea8f85c3.png"
curl -o 12_raranga.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_775ccac3-e781-498e-a07f-7c19ebd07930.png"
curl -o 13_haka.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135311_4b14a2cc-f66f-4c21-8c2f-f27fd9c2647e.png"
curl -o 14_waiata.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_135317_c1a0806c-58c2-4c5b-bef6-76e590d6a48e.png"

# Scenes 15-17 (Act 3-4 Closing)
curl -o 15_hui.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_7e92a60e-07ef-4647-9900-36aa90fd2206.png"
curl -o 16_sunset.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_c386ecdf-a18a-4c97-aa7a-e068fd4f41ec.png"
curl -o 17_stars.png "https://d8j0ntlcm91z4.cloudfront.net/user_3FSTpfDkAq0leZq6yVx7Cl1TDBK/hf_20260822_150527_150668d0-ba0c-4897-b2dc-3fd702240f34.png"

echo "✅ All 17 scenes downloaded to ~/Maori-Documentary/scenes"
```

---

## 🎤 GENERATE NARRATION AUDIO (5 MIN)

1. Go to: https://translate.google.com
2. Paste script from: `/docs/maori-documentary/maori_precolonisation_narration_script.md`
3. Click speaker icon (bottom right)
4. Download MP3 → Save as `narration.mp3`
5. Move to: `~/Maori-Documentary/narration.mp3`

---

## 📹 DAVINCI RESOLVE COMPOSITION

See detailed guide: `/docs/maori-documentary/VIDEO_COMPOSITION_WALKTHROUGH.md`

**Quick Reference:**
- Import all 17 PNG scenes
- Drag narration MP3 to Audio Track 1
- Set durations per timing table
- Add fade/dissolve transitions
- Import SRT subtitle file
- Adjust audio levels (-18dB to -12dB)
- Export MP4 (2K, 24fps, 15-20 Mbps)

---

## 📂 FILES YOU NEED (All in `/docs/maori-documentary/`)

- `maori_precolonisation_narration_script.md` — Full narration text
- `maori_bilingual_subtitles.srt` — 66 bilingual captions
- `VIDEO_COMPOSITION_WALKTHROUGH.md` — Step-by-step DaVinci guide
- `SCENE_DOWNLOADS.md` — All 17 scene download links
- `NARRATION_AUDIO_READY.md` — Audio generation options

---

## ✅ READY TO COMPOSE

**You now have:**
- ✅ All 17 scenes (2K, 24fps)
- ✅ Complete narration script
- ✅ Bilingual subtitles (te reo Māori + English)
- ✅ DaVinci Resolve step-by-step guide
- ✅ Export specifications
- ✅ Timeline timing guide

**Next Step:**
1. Download DaVinci Resolve (free version)
2. Follow VIDEO_COMPOSITION_WALKTHROUGH.md
3. Compose video (2-4 hours)
4. Export final MP4

---

**Project Status**: READY FOR IMMEDIATE COMPOSITION

**Estimated Completion**: 2-4 hours from now

**Final Output**: `Maori-Documentary-Final.mp4` (7:00, 2K, 24fps)

---

**Generated**: 2026-08-22  
**All assets complete and ready**

