import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-chiaki",
  slug: "chiaki",
  title: "Chiaki",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 15.333333969116211,
    "lines": [
      {
        "id": "ch0238_memoriallobby_1_1",
        "text": {
          "zh-cn": "啊哈哈哈！好耶！被我抓拍到啦！",
          "ja": "あははっ！シャッターチャンス、とらえました！",
          "ko": "아하핫! 셔터 찬스, 잡았습니다!",
          "en": "Ahaha! Yes! Got it! Perfect shot!"
        }
      },
      {
        "id": "ch0238_memoriallobby_1_2",
        "text": {
          "zh-cn": "老师的睡颜！下期封面就是它啦~！",
          "ja": "居眠りする先生の顔！次号の表紙にピッタリです！",
          "ko": "선생님의 졸던 표정!\n다음 호 표지 감이라구요~!",
          "en": "Sensei's dozing face! It'll be great for next issue's cover!"
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 15.000000953674316,
    "lines": [
      {
        "id": "ch0238_memoriallobby_2_1",
        "text": {
          "zh-cn": "有了这张照片，《万魔殿周刊》特辑的取材就完成了！",
          "ja": "これで「週刊万魔殿」特集号の準備は万全！",
          "ko": "이걸로 <주간 만마전>\n특집호도 준비 만전!",
          "en": "That's a wrap for this special issue of \"Weekly Pandemonium Society\"!"
        }
      },
      {
        "id": "ch0238_memoriallobby_2_2",
        "text": {
          "zh-cn": "我千明的名头，可不是吹的吧！大独家到手咯~！",
          "ja": "さっすが私！またスクープをゲットしちゃいました～！",
          "ko": "역시 이 치아키,\n이번에도 특종을 잡아냈네요~!",
          "en": "I, Chiaki, have scored myself yet another exclusive report!"
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 8.666666984558105,
    "lines": [
      {
        "id": "ch0238_memoriallobby_3",
        "text": {
          "zh-cn": "嘿嘿！可别小瞧秘书的执行力唷！",
          "ja": "ふふっ、書記の行動力、侮っちゃいけませんよ～？",
          "ko": "후후!\n서기의 행동력을\n얕보면 안 되거든요!",
          "en": "Heehee! Never underestimate a secretary's resolve!"
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 14.666666984558105,
    "lines": [
      {
        "id": "ch0238_memoriallobby_4_1",
        "text": {
          "zh-cn": "啊！来都来了，要不再探索一下老师的秘密呢……？",
          "ja": "そうだ！この勢いで、先生の謎に迫っていきましょうか……？",
          "ko": "그렇지!\n이 기세로 선생님의 비밀까지\n파헤쳐 볼까요……?",
          "en": "Ooh! Maybe while I'm at it, I can find out your secrets too...!"
        }
      },
      {
        "id": "ch0238_memoriallobby_4_2",
        "text": {
          "zh-cn": "比如老师有没有穿着破了洞的袜子之类的……！",
          "ja": "靴下に空いた穴の謎、とか……！",
          "ko": "양말에 난 구멍의 비밀,\n같은……!",
          "en": "Like, why do you have holes in your socks?"
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0238_memoriallobby_5_1",
        "text": {
          "zh-cn": "咦？老，老师！怎么把出口堵住了呀？！",
          "ja": "えっ！意地悪な子は「机の下閉じ込めの刑」に処す……！？",
          "ko": "엣?! 짓궂은 아이는\n'책상 아래에 가두는 형'에\n처한다고요……?!",
          "en": "What?! Your secret is you lock naughty students up under your desk...?"
        }
      },
      {
        "id": "ch0238_memoriallobby_5_2",
        "text": {
          "zh-cn": "不行啦，这里太挤啦~！拜托放我出去！",
          "ja": "ご、ごめんなさ～い！出してください～！",
          "ko": "죄, 죄송합니다~!\n나가게 해주세요~!",
          "en": "I-I'm sorry! Please forgive me!"
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
