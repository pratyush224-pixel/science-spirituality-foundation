export type ServiceSection = {
  title: string;
  paragraphs: string[];
};

export type ServiceData = {
  title: string;
  subtitle: string;
  sections: ServiceSection[];
};

export const servicePages: Record<string, ServiceData> = {
  "/services/reiki": {
    title: "Reiki Healing",
    subtitle:
      "A journey of healing, inner balance, personal growth and deeper self-discovery through Reiki.",

    sections: [
      {
        title: "What Are You Looking For?",
        paragraphs: [
          "Sometimes we know that something in our life is not right, but we cannot clearly understand what is happening or what we should do next.",
          "You may be dealing with stress, health concerns, relationship difficulties, lack of confidence, career problems, negative experiences or deeper questions about your life.",
          "Reiki can be explored as a healing and spiritual practice while you work toward greater balance, awareness and wellbeing.",
        ],
      },
      {
        title: "Feeling Stressed, Overwhelmed or Mentally Disturbed?",
        paragraphs: [
          "Are you constantly stressed, emotionally burdened, restless or unable to find inner peace?",
          "Reiki provides a dedicated space for healing, relaxation, inner awareness and reconnecting with yourself.",
          "Through regular practice, Reiki can become part of your personal journey toward greater calm, balance and self-awareness.",
        ],
      },
      {
        title: "Are You Facing Ongoing Problems?",
        paragraphs: [
          "Do you feel that the same problems keep returning? Do you feel stuck and unable to understand why?",
          "Reiki can be used as a practice for looking inward, becoming more aware of your thoughts and emotions, and exploring the deeper patterns associated with your experiences.",
          "The intention is not simply to deal with what is happening on the surface, but to encourage deeper personal awareness and healing.",
        ],
      },
      {
        title: "Are You Living With a Health Problem?",
        paragraphs: [
          "Are you experiencing an illness, disease, pain or another health-related difficulty?",
          "Reiki may be explored as a complementary healing and wellbeing practice, alongside appropriate medical diagnosis and treatment.",
          "We take health concerns seriously. Reiki is not presented as a replacement for a doctor, hospital or other qualified healthcare professional.",
        ],
      },
      {
        title: "We Help You Find the Right Path",
        paragraphs: [
          "If your concern requires medical investigation or treatment, we believe you should receive the right professional care.",
          "We can help you understand when professional medical attention may be appropriate and, where suitable, guide you toward reputable healthcare providers or organizations that can evaluate your condition and advise you about appropriate treatment.",
          "Our approach is simple: understand the problem, support the person, encourage the right professional care and continue the healing journey.",
        ],
      },
      {
        title: "Are You Facing Relationship Problems?",
        paragraphs: [
          "Are you experiencing repeated conflict, emotional distance, misunderstandings or difficulties with someone important to you?",
          "Reiki can support self-awareness and emotional balance, helping you look at your own inner responses and patterns.",
          "The practice can become part of a journey toward greater empathy, awareness and healthier relationships.",
        ],
      },
      {
        title: "Do You Feel Surrounded by Negative Energy?",
        paragraphs: [
          "Do you feel that a person, place or situation is affecting you negatively?",
          "Do you feel energetically disturbed, uncomfortable or emotionally drained?",
          "Reiki practices can be explored for grounding, energetic awareness, inner cleansing and spiritual protection.",
          "These experiences are approached as personal and spiritual concerns rather than as objectively established causes of illness or misfortune.",
        ],
      },
      {
        title: "Are You Struggling With Confidence?",
        paragraphs: [
          "Do you doubt yourself? Do you feel insecure or unable to express yourself fully?",
          "Reiki practice can become part of a personal development journey focused on self-awareness, inner strength and confidence.",
          "As you become more aware of yourself, you can begin to understand your strengths, limitations and potential more clearly.",
        ],
      },
      {
        title: "Are You Stuck in Your Career or Life Direction?",
        paragraphs: [
          "Are you confused about your career? Do you feel disconnected from your work or unsure about what you really want to do?",
          "Reiki, meditation and intention-based practices can help you turn inward, reflect on your aspirations and become clearer about the direction you want to explore.",
          "The aim is to help you connect your intentions with meaningful choices and practical action.",
        ],
      },
      {
        title: "Are You Looking for Wealth, Abundance or Goal Achievement?",
        paragraphs: [
          "Do you want to improve your relationship with money, prosperity and abundance?",
          "Do you have important goals but find it difficult to move toward them?",
          "Reiki can be combined with intention, awareness, visualization and focused personal action to explore your relationship with abundance and the goals you want to achieve.",
        ],
      },
      {
        title: "Do You Want to Develop Your Intuition?",
        paragraphs: [
          "Do you sometimes feel that you have an inner sense or intuition that you would like to understand better?",
          "Reiki practice can provide a framework for exploring intuition, inner awareness, empathy and spiritual insight.",
          "The emphasis is on regular practice, observation and personal exploration.",
        ],
      },
      {
        title: "Do You Feel There Is More Potential Within You?",
        paragraphs: [
          "Do you feel that you have abilities, talents or potential that you have not yet fully explored?",
          "Reiki can become a pathway for self-discovery and personal development.",
          "Through practice, reflection and greater awareness, you can explore your inner strengths and discover new possibilities for personal growth.",
        ],
      },
      {
        title: "Are You Searching for Answers About Life?",
        paragraphs: [
          "Why am I here? What is my purpose? Why do certain experiences keep happening in my life?",
          "Many people eventually begin asking deeper questions about life, existence, consciousness and their spiritual path.",
          "Reiki connects the practitioner with what is described as universal life-force energy and encourages meditation, mindfulness and looking inward.",
          "The journey can help you explore the possibility that some of the answers you seek may already be within you.",
        ],
      },
      {
        title: "Do You Want Deeper Spiritual Growth?",
        paragraphs: [
          "Perhaps your concern is not a particular problem. Perhaps you simply feel that you want to understand yourself and consciousness more deeply.",
          "Reiki can become a regular spiritual practice for inner awareness, personal development and spiritual exploration.",
          "For those drawn toward deeper practices, Reiki can be part of a continuing journey of self-discovery and awakening.",
        ],
      },
      {
        title: "Reiki Is More Than Receiving Healing",
        paragraphs: [
          "Reiki is not only something you can receive from a practitioner. You can also learn Reiki and develop your own practice.",
          "Learning Reiki can give you an opportunity to practise on yourself, support your loved ones, develop your healing skills and explore your own spiritual journey.",
          "For those who wish to take their practice further, Reiki can also become a foundation for developing a healing practice and helping others.",
        ],
      },
      {
        title: "Learn Reiki and Develop Your Practice",
        paragraphs: [
          "If you feel drawn toward Reiki, you can learn it step by step and develop a regular practice.",
          "You may want to learn Reiki for your own healing, to support family and friends, to deepen your spiritual practice or to develop your skills as a Reiki practitioner.",
          "Your Reiki journey can begin with learning, regular practice and a deeper understanding of yourself and the energy you work with.",
        ],
      },
      {
        title: "Where Your Journey Can Lead",
        paragraphs: [
          "Reiki can be explored at different stages of your personal journey: when you are looking for healing, when you are seeking balance, when you want to understand yourself better, or when you feel ready to explore your deeper potential.",
          "The journey is personal. Your questions, experiences and intentions are unique to you.",
        ],
      },
    ],
  },

  "/services/dowsing": {
    title: "Dowsing",
    subtitle:
      "An intuitive approach for exploring questions, uncertainties, unknown matters and seeking clarity.",

    sections: [
      {
        title: "Do You Have a Question You Want Answered?",
        paragraphs: [
          "Sometimes we have questions in our mind for which we are unable to find a clear answer.",
          "You may be trying to understand a situation, make a decision, find direction or explore something that remains unknown to you.",
          "Dowsing can be explored as an intuitive method for bringing your questions into a focused session and seeking clarity or guidance.",
        ],
      },
      {
        title: "Explore the Unknown",
        paragraphs: [
          "There may be something you want to know but cannot easily discover through ordinary means.",
          "You may want to explore something about a situation, a person, a place or an event that is unclear to you.",
          "Bring the question that is on your mind and use the session as an opportunity for intuitive exploration.",
        ],
      },
      {
        title: "Lost or Misplaced Things",
        paragraphs: [
          "Have you lost something and cannot remember where you kept it?",
          "Dowsing may also be explored when you are looking for a misplaced object, important belonging or something that you cannot currently locate.",
          "The focus of the session can be directed toward exploring the question and seeking possible direction about where to look.",
        ],
      },
      {
        title: "When Someone Is Missing",
        paragraphs: [
          "Are you trying to understand where a missing person may be or looking for some direction regarding a situation involving someone who is difficult to locate?",
          "You can bring the circumstances and questions you have to a dowsing session for intuitive exploration.",
          "Such a session should be understood as an intuitive exploration and not as a substitute for appropriate practical, legal or emergency assistance.",
        ],
      },
      {
        title: "Questions About the Past",
        paragraphs: [
          "Sometimes we want to understand something that happened in the past or explore questions about an earlier event or situation.",
          "If there is something from the past that continues to remain unclear in your mind, you can bring that question to a dowsing session and explore it intuitively.",
        ],
      },
      {
        title: "Questions About the Future",
        paragraphs: [
          "You may also have questions about what could happen in the future or which direction a situation may take.",
          "Dowsing can be explored as an intuitive practice for seeking guidance around future possibilities and decisions.",
          "It is important to understand that such exploration does not guarantee or objectively establish what will happen in the future.",
        ],
      },
      {
        title: "Negative Energy in Your Home or Surroundings",
        paragraphs: [
          "Does something in your home or surroundings feel unusual, uncomfortable or energetically disturbing to you?",
          "You may want to explore whether there is unwanted or negative energy associated with a particular room, place, object or environment.",
          "Dowsing can be used as an intuitive method to explore these concerns and seek greater clarity about what you are experiencing.",
        ],
      },
      {
        title: "Do You Feel Someone Is Sending You Negative Energy?",
        paragraphs: [
          "Sometimes a person may feel that another individual's thoughts, intentions or energy are affecting them.",
          "You may wonder whether a particular person is sending negative energy toward you, or whether a relationship or interaction is creating an uncomfortable energetic experience.",
          "You can bring such questions to a dowsing session and explore them through an intuitive approach.",
          "The session is an exploration of your concern and should not be treated as objective proof that another person is sending negative energy.",
        ],
      },
      {
        title: "People, Places, Objects & Situations",
        paragraphs: [
          "Your question does not have to fit into one particular category.",
          "You may want to explore something about a person, a place, an object, a relationship, a decision, an uncertain situation or something else that has been occupying your mind.",
          "The session can be focused around the particular question or concern that is important to you.",
        ],
      },
      {
        title: "Bring Your Question",
        paragraphs: [
          "Whatever question is on your mind, you can bring it to the session and explore it through dowsing.",
          "The purpose is to create a focused space for intuitive exploration, reflection and seeking direction when something feels uncertain or unknown.",
          "Bring your question. Explore what is unknown. Seek the clarity and guidance you are looking for.",
        ],
      },
    ],
  },

  "/services/past-life-regression": {
    title: "Past Life Regression",
    subtitle:
      "A guided experiential exploration of imagery, emotions, memories and consciousness.",

    sections: [
      {
        title: "Are You Experiencing Something You Cannot Explain?",
        paragraphs: [
          "Sometimes we experience a fear, emotional reaction, relationship pattern or recurring difficulty without understanding where it comes from.",
          "You may feel that you have tried to understand the problem, but something deeper still seems unresolved.",
          "Past Life Regression and related regression approaches provide a way to explore these experiences through guided relaxation, focused attention and subconscious exploration.",
        ],
      },
      {
        title: "Unexplained Fears & Phobias",
        paragraphs: [
          "Do you have a fear or phobia that seems difficult to explain?",
          "Regression work may be used to explore imagery, emotions and experiences that may be personally connected with the fear.",
          "The purpose is to bring greater awareness to the experience and work with the emotions and meanings that arise during the session.",
        ],
      },
      {
        title: "Childhood Experiences That Still Affect You",
        paragraphs: [
          "Are you carrying hurt, rejection, abandonment, neglect or painful experiences from childhood?",
          "Age Regression can be used to revisit significant experiences from the present lifetime and explore how they may have shaped beliefs, emotions and behaviour.",
          "Inner Child Healing can then provide a framework for working with the emotional experience and bringing greater self-understanding and compassion to it.",
        ],
      },
      {
        title: "Repeating Relationship Patterns",
        paragraphs: [
          "Do you keep experiencing similar difficulties in relationships?",
          "Do you repeatedly feel abandoned, rejected, controlled, misunderstood or unable to trust?",
          "Regression approaches can be used to explore experiences and emotional patterns that may be connected with these recurring themes.",
          "The intention is to understand the pattern, process unresolved emotions and develop a healthier relationship with yourself and others.",
        ],
      },
      {
        title: "Self-Sabotage & Limiting Beliefs",
        paragraphs: [
          "Do you know what you want, but somehow keep stopping yourself?",
          "Do you struggle with self-worth, confidence, success or the belief that you are capable of achieving what you want?",
          "Regression work may help you explore experiences associated with these beliefs and bring them into conscious awareness so they can be examined and reframed.",
        ],
      },
      {
        title: "Career, Money & Abundance Blocks",
        paragraphs: [
          "Are you working hard but still feel stuck financially or professionally?",
          "Do you carry strong beliefs about money, success, worthiness or what you are allowed to achieve?",
          "Regression-based exploration can be used to examine the personal stories, memories and beliefs associated with these patterns and help you develop a different perspective.",
        ],
      },
      {
        title: "Grief, Anger & Unresolved Emotions",
        paragraphs: [
          "Are you carrying grief, anger, resentment or emotions that you have never been able to fully process?",
          "Regression and Inner Child Healing can provide a structured space to explore the experiences connected with these emotions.",
          "The focus is on awareness, emotional processing, understanding and integration rather than simply pushing difficult feelings away.",
        ],
      },
      {
        title: "When the Question Feels Deeper",
        paragraphs: [
          "Some people come with questions that are not easily explained through everyday experiences.",
          "You may be curious about recurring dreams, unusual emotional responses, a strong connection with a particular person or place, or questions about your spiritual journey.",
          "Past Life Regression can be approached as a transpersonal exploration of imagery, emotions, symbolism and consciousness.",
        ],
      },
      {
        title: "It May Not Always Be About a Past Life",
        paragraphs: [
          "An important part of our approach is that we do not assume every issue originates in a past life.",
          "Depending on the person's experience, exploration may move toward present-life events, childhood experiences, prenatal or womb-related themes, past-life imagery or Inner Child Healing.",
          "The approaches can work together according to the individual's needs and the direction of the session.",
        ],
      },
      {
        title: "How the Exploration Works",
        paragraphs: [
          "The session begins with guided relaxation and focused attention. You are then guided through an experiential process in which images, sensations, emotions or memories may arise.",
          "The experience is explored with guidance and therapeutic dialogue, allowing you to examine what you are experiencing and the emotions or beliefs connected with it.",
          "The session then focuses on processing and integration so that the experience can be understood in relation to your present life.",
        ],
      },
      {
        title: "Four Approaches, One Integrated Journey",
        paragraphs: [
          "Past Life Regression explores past-life imagery and experiences.",
          "Age Regression explores significant experiences from the present lifetime.",
          "Womb Regression explores prenatal imagery and emotional themes.",
          "Inner Child Healing works with unresolved childhood emotions and supports integration into the present.",
        ],
      },
      {
        title: "A Journey Toward Greater Understanding",
        paragraphs: [
          "The purpose of regression work is to explore the experiences and patterns that may be meaningful to you, process unresolved emotions and develop greater awareness of yourself.",
          "For some people, this becomes a journey of emotional healing. For others, it becomes a deeper exploration of consciousness, spirituality and personal meaning.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Regression experiences are subjective experiences. They should not automatically be treated as historically verified memories or as proof of a particular past-life event.",
          "These sessions are intended for personal, spiritual and experiential exploration. They are not a substitute for medical diagnosis, psychiatric care or psychological treatment.",
          "If you are experiencing a serious mental-health or medical condition, appropriate professional healthcare should be sought.",
        ],
      },
    ],
  },

  "/services/chakra-wellness": {
    title: "Chakra Wellness",
    subtitle:
      "Explore your chakra system, understand possible energetic imbalances and develop practices for balance, cleansing and energetic wellbeing.",

    sections: [
      {
        title: "Don't Know Which Chakra May Be Associated With Your Concern?",
        paragraphs: [
          "Sometimes you may experience physical discomfort, emotional difficulties, recurring patterns or a feeling of imbalance without knowing which chakra may be associated with your experience.",
          "Through our Chakra Wellness approach, we explore the chakra system and help you identify possible chakra imbalances associated with your concerns.",
          "The session can then focus on appropriate chakra-focused practices for balance, awareness, relaxation and wellbeing.",
        ],
      },
      {
        title: "Understanding Your Seven Major Chakras",
        paragraphs: [
          "Chakra traditions describe seven major energy centres, each associated with different physical, emotional and psychological themes.",
          "These are commonly described as the Root, Sacral, Solar Plexus, Heart, Throat, Third Eye and Crown chakras.",
          "We use these traditional concepts as a framework for personal exploration, meditation and energetic practices.",
        ],
      },
      {
        title: "Root Chakra — Grounding & Stability",
        paragraphs: [
          "The Root Chakra is traditionally associated with grounding, stability, security and a sense of connection with the physical world.",
          "If you feel unsettled, disconnected, insecure or unable to feel grounded, chakra-focused practices may provide an opportunity for reflection and grounding.",
        ],
      },
      {
        title: "Sacral Chakra — Emotions & Creativity",
        paragraphs: [
          "The Sacral Chakra is traditionally associated with emotions, creativity, pleasure, relationships and the ability to experience and express feelings.",
          "Chakra-focused practices can help you explore your emotional awareness, creative expression and relationship with yourself and others.",
        ],
      },
      {
        title: "Solar Plexus Chakra — Confidence & Personal Power",
        paragraphs: [
          "The Solar Plexus Chakra is traditionally associated with confidence, personal power, motivation, will and self-esteem.",
          "If you struggle with self-confidence, hesitation or difficulty taking action, practices focused on this chakra can support reflection and personal development.",
        ],
      },
      {
        title: "Heart Chakra — Love & Emotional Balance",
        paragraphs: [
          "The Heart Chakra is traditionally associated with love, compassion, connection, forgiveness and emotional balance.",
          "Chakra practices may provide a space to reflect on relationships, emotional experiences, self-love and compassion.",
        ],
      },
      {
        title: "Throat Chakra — Communication & Expression",
        paragraphs: [
          "The Throat Chakra is traditionally associated with communication, self-expression and speaking one's truth.",
          "If you find it difficult to express yourself or communicate your feelings, focused practices may encourage greater awareness of how you communicate and express yourself.",
        ],
      },
      {
        title: "Third Eye Chakra — Intuition & Inner Awareness",
        paragraphs: [
          "The Third Eye Chakra is traditionally associated with intuition, insight, imagination and inner awareness.",
          "Meditation and visualization practices can be used to explore your inner experience and develop greater awareness of your thoughts, perceptions and intuitive feelings.",
        ],
      },
      {
        title: "Crown Chakra — Spiritual Connection & Awareness",
        paragraphs: [
          "The Crown Chakra is traditionally associated with spirituality, consciousness, meaning and a sense of connection with something greater than the individual self.",
          "Chakra-focused meditation can provide a space for reflection, stillness and deeper spiritual exploration.",
        ],
      },
      {
        title: "Chakra Balancing & Cleansing",
        paragraphs: [
          "Once possible areas of energetic imbalance have been explored, we can guide you through practices intended to support chakra balance and energetic wellbeing.",
          "These may include meditation, visualization, breath awareness, focused attention and other chakra-oriented practices.",
          "The purpose is to encourage relaxation, awareness, grounding and a greater sense of inner balance.",
        ],
      },
      {
        title: "Aura Cleansing & Energetic Protection",
        paragraphs: [
          "Do you often feel emotionally drained, uncomfortable in certain environments, or affected by what you describe as negative energy?",
          "Our Chakra Wellness approach can include aura cleansing practices intended to help you release unwanted energetic influences and restore a greater sense of inner balance and clarity.",
          "We can also guide you through energetic protection practices to help you feel more grounded, centred and protected when dealing with environments or experiences that feel energetically disturbing.",
          "The goal is to help you develop a regular personal practice for cleansing, grounding, awareness and energetic wellbeing.",
        ],
      },
      {
        title: "Chakra Wellness & Reiki",
        paragraphs: [
          "Chakra-focused practices can also be explored alongside Reiki as part of an integrated personal wellbeing and spiritual practice.",
          "The two approaches can be combined according to the individual's goals, experience and comfort.",
        ],
      },
      {
        title: "Develop Your Own Chakra Practice",
        paragraphs: [
          "Chakra wellness is not limited to a single session. You can learn practices that can become part of your own regular routine.",
          "With continued practice, you can develop greater awareness of your emotions, thoughts, body sensations and inner experiences.",
        ],
      },
      {
        title: "What to Expect in a Session",
        paragraphs: [
          "A session begins by understanding your concerns and what you would like to explore.",
          "We then use chakra-focused approaches to explore possible areas of imbalance and guide you through suitable practices.",
          "The session is intended to provide a calm and supportive environment for self-awareness, reflection, relaxation and energetic wellbeing.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Chakra concepts come from traditional spiritual and contemplative systems and are not a substitute for medical diagnosis or treatment.",
          "When you have a medical symptom, illness or persistent physical or psychological concern, appropriate healthcare should be sought from a qualified professional.",
          "Chakra Wellness is offered as a complementary practice for personal exploration, relaxation, spiritual wellbeing and self-awareness.",
        ],
      },
    ],
  },

  "/services/spiritual-wellness": {
    title: "Spiritual Wellness",
    subtitle:
      "Explore your inner world, deepen self-awareness and create a more meaningful connection with yourself, consciousness and life.",

    sections: [
      {
        title: "Are You Searching for Something Deeper?",
        paragraphs: [
          "There may come a time when external achievements are no longer enough and you begin asking deeper questions about yourself and your life.",
          "You may wonder about your purpose, your direction, your experiences, your consciousness or the meaning behind what you are going through.",
          "Spiritual Wellness creates a space to explore these questions through reflection, awareness, meditation and personal experience.",
        ],
      },
      {
        title: "Do You Feel Disconnected From Yourself?",
        paragraphs: [
          "Do you sometimes feel disconnected from your own thoughts, emotions, values or sense of direction?",
          "Modern life can keep us constantly occupied, leaving little time to pause and understand what is happening within us.",
          "Spiritual wellness practices can help you slow down, observe yourself and reconnect with your inner experience.",
        ],
      },
      {
        title: "Searching for Meaning & Purpose?",
        paragraphs: [
          "Are you asking yourself, 'What is my purpose?' or 'What am I really meant to do?'",
          "Spiritual exploration can provide a framework for reflecting on your values, experiences, aspirations and the kind of life you want to create.",
          "The aim is not to give you a predetermined answer, but to help you explore the questions that matter to you.",
        ],
      },
      {
        title: "Finding Inner Peace",
        paragraphs: [
          "Do you find it difficult to quiet your mind or create moments of peace in your everyday life?",
          "Mindfulness, meditation, breathing practices and reflective exercises can help create a dedicated space for stillness and awareness.",
          "With regular practice, these approaches can become tools for developing greater calm and presence.",
        ],
      },
      {
        title: "Understanding Your Thoughts & Emotions",
        paragraphs: [
          "Our thoughts and emotions can strongly influence the way we experience ourselves and the world around us.",
          "Spiritual wellness encourages you to observe these experiences rather than immediately becoming controlled by them.",
          "Greater awareness can help you recognise recurring patterns, understand your responses and make more conscious choices.",
        ],
      },
      {
        title: "Exploring Consciousness",
        paragraphs: [
          "At Science & Spirituality Foundation, spiritual exploration is closely connected with our interest in consciousness.",
          "You may be curious about awareness, the nature of the mind, meditation, intuition, spiritual experiences or the deeper dimensions of human experience.",
          "These subjects can be explored with an open and reflective approach, allowing you to investigate your own experience rather than simply accepting someone else's conclusions.",
        ],
      },
      {
        title: "Spiritual Growth Is Personal",
        paragraphs: [
          "There is no single path that is right for everyone.",
          "For one person, spiritual growth may involve meditation. For another, it may involve self-reflection, service, healing, contemplation, study or developing a deeper understanding of consciousness.",
          "Our approach respects individual beliefs and encourages you to explore what has genuine meaning for you.",
        ],
      },
      {
        title: "You Don't Have to Follow a Particular Belief System",
        paragraphs: [
          "Spiritual wellness does not require you to adopt a particular religion, philosophy or belief system.",
          "You can explore spirituality from your own background and perspective.",
          "The emphasis is on awareness, reflection, personal experience, compassion, meaning and conscious living.",
        ],
      },
      {
        title: "Meditation, Mindfulness & Reflection",
        paragraphs: [
          "Meditation and mindfulness can become important tools in your spiritual wellness journey.",
          "Through practices involving breath awareness, observation, visualization and focused attention, you can create time to become more present and aware.",
          "Reflection can then help you understand what you experience and how it relates to your everyday life.",
        ],
      },
      {
        title: "Developing a Deeper Relationship With Yourself",
        paragraphs: [
          "Spiritual wellness ultimately begins with understanding yourself.",
          "As you become more aware of your thoughts, emotions, values, reactions and intentions, you can begin to make choices that are more aligned with the person you want to become.",
          "This can support a continuing journey of personal growth and inner development.",
        ],
      },
      {
        title: "From Inner Awareness to Everyday Life",
        paragraphs: [
          "Spiritual growth is not only about what happens during meditation or a session.",
          "The deeper purpose is to bring awareness into everyday life — into relationships, work, decisions, communication and the way you respond to challenges.",
          "The practices become meaningful when they gradually influence how you live.",
        ],
      },
      {
        title: "What Happens in a Spiritual Wellness Session?",
        paragraphs: [
          "A session begins by understanding what you are currently experiencing and what you would like to explore.",
          "Depending on your needs, the session may involve guided reflection, meditation, mindfulness, visualization, discussion or other spiritual wellness practices.",
          "The process is personal and can be adapted according to your goals, experience and comfort.",
        ],
      },
      {
        title: "Where Your Journey Can Lead",
        paragraphs: [
          "Spiritual wellness can become a continuing journey rather than a one-time experience.",
          "You may begin by seeking peace or clarity and gradually become interested in deeper questions about yourself, consciousness, purpose and existence.",
          "Every stage of the journey can provide an opportunity to learn, reflect and grow.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Spiritual Wellness is intended for personal reflection, wellbeing, self-awareness and spiritual exploration.",
          "It does not replace medical diagnosis, psychological treatment or professional healthcare.",
          "Where a concern involves a medical or mental-health condition, appropriate qualified professional support should be sought.",
        ],
      },
    ],
  },

  "/services/meditation": {
    title: "Meditation",
    subtitle:
      "Learn to quiet the noise, focus your awareness and explore deeper levels of relaxation, self-awareness and consciousness.",

    sections: [
      {
        title: "Do You Feel Your Mind Is Always Busy?",
        paragraphs: [
          "Do you find yourself constantly thinking, worrying, planning or replaying situations in your mind?",
          "Many people find it difficult to create even a few moments of mental stillness during a busy day.",
          "Meditation provides a structured opportunity to pause, observe your mind and gradually develop greater awareness of your thoughts and attention.",
        ],
      },
      {
        title: "Looking for Inner Peace & Relaxation?",
        paragraphs: [
          "Sometimes what we need is simply a quiet space where we can slow down and reconnect with ourselves.",
          "Guided meditation can help create a period of calm, relaxation and focused awareness.",
          "With regular practice, meditation can become a valuable part of your personal wellbeing routine.",
        ],
      },
      {
        title: "Learn to Observe Rather Than React",
        paragraphs: [
          "Thoughts and emotions naturally arise throughout the day.",
          "Meditation teaches you to notice what is happening within you without immediately following every thought or reacting to every emotion.",
          "This process can help you develop greater awareness of your inner experiences and responses.",
        ],
      },
      {
        title: "Breath Awareness",
        paragraphs: [
          "The breath can provide a simple and accessible point of focus during meditation.",
          "By gently bringing your attention back to the breath whenever your mind wanders, you can practise concentration and present-moment awareness.",
          "Breath-based meditation can be adapted to your level of experience and comfort.",
        ],
      },
      {
        title: "Guided Meditation",
        paragraphs: [
          "If you are new to meditation or find it difficult to practise alone, guided meditation can provide structure and direction.",
          "A facilitator can guide your attention through breathing, body awareness, visualization, relaxation or reflective exercises.",
          "This can make it easier to establish a consistent meditation practice.",
        ],
      },
      {
        title: "Visualization & Inner Exploration",
        paragraphs: [
          "Meditation can also include visualization exercises in which you work with mental imagery, intention and focused attention.",
          "These practices can be used for relaxation, personal reflection, goal-oriented visualization or spiritual exploration.",
          "The experience is personal, and different people may respond to visualization in different ways.",
        ],
      },
      {
        title: "Meditation for Focus & Concentration",
        paragraphs: [
          "Do you find it difficult to concentrate on one thing for very long?",
          "Meditation provides an opportunity to practise bringing attention back to a chosen object, sensation, sound, breath or thought.",
          "Over time, this repeated practice can help you become more aware of where your attention goes and how you redirect it.",
        ],
      },
      {
        title: "Meditation & Emotional Awareness",
        paragraphs: [
          "Meditation can create space to notice emotions without immediately suppressing or acting on them.",
          "As you become more observant, you may begin recognising emotional patterns and the situations that trigger particular responses.",
          "This awareness can support personal reflection and more conscious responses in everyday life.",
        ],
      },
      {
        title: "Chakra Meditation",
        paragraphs: [
          "For those interested in chakra traditions, meditation can be combined with focused attention on the seven major chakras.",
          "Chakra meditation may use visualization, breath awareness, colour imagery and focused attention according to the practice being followed.",
          "It can be explored as part of a broader spiritual and energetic wellbeing practice.",
        ],
      },
      {
        title: "Reiki Meditation",
        paragraphs: [
          "Reiki practitioners may also incorporate meditation into their Reiki practice.",
          "Reiki meditation can provide a quiet space for relaxation, self-awareness, intention and spiritual reflection.",
          "For people learning Reiki, meditation can become part of developing a regular personal practice.",
        ],
      },
      {
        title: "Meditation & Consciousness",
        paragraphs: [
          "At Science & Spirituality Foundation, meditation is also connected with our interest in consciousness.",
          "As you become quieter and more observant, you can begin exploring questions about awareness, attention, thought and the nature of your own experience.",
          "Meditation can therefore become more than relaxation — it can become a method of personal investigation.",
        ],
      },
      {
        title: "Are You Looking for Spiritual Growth?",
        paragraphs: [
          "Meditation has been used across many spiritual and contemplative traditions as a way of developing inner awareness.",
          "You can approach meditation from your own belief system or simply as a practice of observation and reflection.",
          "The direction of your practice can evolve as your understanding of yourself develops.",
        ],
      },
      {
        title: "Develop a Daily Meditation Practice",
        paragraphs: [
          "The greatest value of meditation often comes from regular practice rather than occasional sessions.",
          "You can begin with a manageable amount of time and gradually develop a routine that fits your life.",
          "Consistency, patience and a non-judgemental attitude are more important than trying to achieve a particular experience.",
        ],
      },
      {
        title: "What Happens in a Meditation Session?",
        paragraphs: [
          "A session begins by understanding your experience, your level of meditation practice and what you would like to achieve.",
          "You may then be guided through breathing awareness, relaxation, focused attention, visualization or another suitable meditation technique.",
          "The session is designed to provide a calm environment in which you can learn, practise and develop greater awareness.",
        ],
      },
      {
        title: "Where Meditation Can Take You",
        paragraphs: [
          "You may begin meditation because you want relaxation or a quieter mind.",
          "With continued practice, you may become interested in concentration, emotional awareness, spirituality, intuition or deeper questions about consciousness.",
          "Your meditation practice can grow with you as your needs and understanding change.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Meditation is a complementary practice for relaxation, wellbeing, self-awareness and personal or spiritual exploration.",
          "It is not a substitute for medical diagnosis, psychiatric care or professional psychological treatment.",
          "If you are experiencing a serious physical or mental-health concern, appropriate qualified professional support should be sought.",
        ],
      },
    ],
  },

  "/services/manifestation": {
    title: "Manifestation",
    subtitle:
      "Turn your intentions into meaningful goals through clarity, visualization, mindset, focused action and consistent practice.",

    sections: [
      {
        title: "What Do You Really Want?",
        paragraphs: [
          "Many people want change in their lives, but they have never clearly defined what they actually want.",
          "Manifestation begins with becoming clear about your intentions, priorities and the kind of life you want to create.",
          "The first step is not simply wishing for something. It is understanding what matters to you and why.",
        ],
      },
      {
        title: "Clarity of Intention",
        paragraphs: [
          "A clear intention gives your mind and actions a direction.",
          "Whether your goal involves career, relationships, financial growth, personal development, health and wellbeing, or spiritual growth, clarity can help you focus your energy and attention.",
          "We help you explore what you want, why you want it and what meaningful outcome you are working toward.",
        ],
      },
      {
        title: "What May Be Holding You Back?",
        paragraphs: [
          "Sometimes the biggest obstacle is not the situation outside us but the beliefs and patterns we carry within ourselves.",
          "You may repeatedly tell yourself that you are not capable, not worthy, not lucky or unable to succeed.",
          "Manifestation work can include identifying these limiting beliefs and becoming more conscious of the internal patterns that influence your choices.",
        ],
      },
      {
        title: "Mindset & Subconscious Patterns",
        paragraphs: [
          "Our beliefs can influence how we see opportunities, respond to challenges and make decisions.",
          "By becoming more aware of recurring thoughts and beliefs, you can begin questioning whether they still serve you.",
          "The aim is to develop a more constructive relationship with your thoughts, intentions and possibilities.",
        ],
      },
      {
        title: "Visualization — See the Possibility",
        paragraphs: [
          "Visualization involves creating a clear mental picture of an intended goal or experience.",
          "When used thoughtfully, visualization can help you clarify what you want, strengthen your focus and mentally rehearse the actions associated with your goals.",
          "Visualization is used as a supportive practice rather than a guarantee that an outcome will automatically occur.",
        ],
      },
      {
        title: "Affirmations & Conscious Thinking",
        paragraphs: [
          "Affirmations can be used as intentional statements that help you focus attention on constructive beliefs and desired qualities.",
          "Rather than repeating words without reflection, we encourage affirmations that are meaningful, realistic and connected with the actions you are willing to take.",
          "The purpose is to consciously work with your internal dialogue and direction.",
        ],
      },
      {
        title: "Emotional Alignment",
        paragraphs: [
          "Manifestation is not only about thinking about a goal. Your emotional relationship with that goal also matters to your personal experience.",
          "You may have a strong desire for success while simultaneously feeling fear, doubt or unworthiness.",
          "Exploring these emotions can help you understand what is happening internally and create greater alignment between your intentions and your actions.",
        ],
      },
      {
        title: "Career & Professional Goals",
        paragraphs: [
          "Are you looking for a new career direction, professional growth, a business opportunity or greater confidence in your work?",
          "Manifestation practices can help you clarify your professional goals, visualise possibilities and identify practical steps toward them.",
          "Your intention becomes meaningful when it is connected with learning, preparation, decisions and action.",
        ],
      },
      {
        title: "Money, Prosperity & Abundance",
        paragraphs: [
          "Do you want to develop a healthier and more conscious relationship with money and abundance?",
          "You can explore the beliefs, fears and attitudes you have developed around financial success and prosperity.",
          "The focus is on combining intention and mindset with responsible financial decisions, practical planning and consistent action.",
        ],
      },
      {
        title: "Relationships & Personal Life",
        paragraphs: [
          "Manifestation can also be used to clarify what you want from your relationships and personal life.",
          "Instead of focusing only on attracting a particular person, the process can help you understand the qualities, values and type of relationship you want to experience.",
          "This can then be connected with your own communication, boundaries, choices and behaviour.",
        ],
      },
      {
        title: "Manifestation & Meditation",
        paragraphs: [
          "Meditation can provide a quiet environment for clarifying intentions and practising visualization.",
          "A regular meditation practice can help you create time for reflection and become more aware of thoughts that may be influencing your goals.",
          "Manifestation and meditation can therefore complement one another as personal development practices.",
        ],
      },
      {
        title: "Manifestation & Reiki",
        paragraphs: [
          "For people who practise Reiki, Reiki can be incorporated into intention-setting and personal spiritual practice.",
          "The combination can provide a framework for reflection, intention, visualization and personal action.",
          "Each practice has its own purpose, and neither should be presented as a guaranteed method of producing a particular external result.",
        ],
      },
      {
        title: "From Intention to Action",
        paragraphs: [
          "A goal becomes much more powerful when intention is followed by action.",
          "We encourage you to translate your intentions into specific, practical and achievable steps.",
          "Learn what you need to learn. Make the necessary decisions. Take action. Review your progress. Adjust your approach when necessary.",
        ],
      },
      {
        title: "Consistency & Discipline",
        paragraphs: [
          "Manifestation is not about expecting an immediate result after one visualization or affirmation.",
          "Meaningful change usually requires continued attention, practice, learning and action.",
          "Developing a consistent routine can help keep your intentions connected with your everyday behaviour.",
        ],
      },
      {
        title: "What Happens in a Manifestation Session?",
        paragraphs: [
          "A session begins by understanding what you want to create or change in your life.",
          "We then explore your intention, the beliefs or patterns that may be influencing it, and suitable practices such as visualization, reflection, affirmations or meditation.",
          "The session can conclude by identifying practical actions that can help you move from intention toward your chosen goal.",
        ],
      },
      {
        title: "Develop Your Own Manifestation Practice",
        paragraphs: [
          "The ultimate aim is not dependence on a session or practitioner.",
          "You can learn how to clarify your intentions, work with your mindset, visualize your goals, observe your beliefs and take purposeful action on your own.",
          "Your practice can evolve as your goals and understanding change.",
        ],
      },
      {
        title: "An Important Perspective",
        paragraphs: [
          "Manifestation is presented as a personal-development practice involving intention, visualization, reflection, mindset and purposeful action.",
          "We do not guarantee that thoughts, affirmations or visualization alone will produce a particular external outcome.",
          "Real-world circumstances, other people's choices and many factors outside your control can influence outcomes. Meaningful goals should therefore be approached with realistic expectations and practical action.",
        ],
      },
    ],
  },

  "/services/fingerprint-analysis": {
    title: "Fingerprint Analysis",
    subtitle:
      "Explore your unique fingerprint patterns in relation to brain-linked abilities, behavioural tendencies, natural strengths and potential — and discover whether your chosen path is aligned with you.",

    sections: [
      {
        title: "Are You Really Aligned With the Path You Have Chosen?",
        paragraphs: [
          "Have you ever wondered whether the profession, career, business or stream you have chosen is actually aligned with your natural abilities?",
          "A student may be studying a particular stream because of family expectations, social pressure or what everyone else is doing.",
          "A professional may be working in a field that does not fully use their natural strengths.",
          "A business person may be working extremely hard without understanding whether their role, working style and business direction are aligned with their abilities.",
          "The Science of Fingerprints provides an opportunity to explore these questions through an interpretive fingerprint-based assessment of brain-linked abilities and behavioural tendencies.",
        ],
      },

      {
        title: "Your Fingerprints Are Unique",
        paragraphs: [
          "Your fingerprints are unique to you. The Science of Fingerprints approach uses fingerprint patterns as the starting point for exploring individual characteristics, abilities and behavioural tendencies.",
          "The purpose is not simply to tell you who you are. It is to provide actionable insights that can help you understand yourself, recognise your strengths and make more informed choices about your future.",
          "The focus is on self-understanding, potential, direction and personal development.",
        ],
      },

      {
        title: "Fingerprint Patterns & Brain-Linked Abilities",
        paragraphs: [
          "This approach interprets fingerprint patterns in relation to different brain-linked abilities and behavioural tendencies.",
          "The resulting profile can be explored as a framework for understanding how you may naturally learn, communicate, behave, approach challenges and use your abilities.",
          "These insights can then be considered alongside your interests, experience, education, goals and real-world circumstances.",
        ],
      },

      {
        title: "For Students — Are You Choosing the Right Stream?",
        paragraphs: [
          "Choosing a stream after school can feel like one of the biggest decisions of your life.",
          "Science, commerce, humanities, professional courses, creative fields and vocational pathways all require different combinations of interests, abilities, skills and commitment.",
          "Fingerprint Analysis can provide additional insights into your perceived natural abilities, learning tendencies, strengths and areas for development.",
          "The objective is to help students and parents have a more informed conversation about possible educational and career directions.",
        ],
      },

      {
        title: "Understand Your Natural Strengths",
        paragraphs: [
          "Every individual has different strengths.",
          "Some people may naturally enjoy analysing problems. Others may be more comfortable communicating, creating, organising, leading, building relationships or working with practical tasks.",
          "Understanding your strengths can help you make better use of your abilities instead of constantly trying to copy someone else's path.",
          "The profile can help identify areas that may deserve further development and exploration.",
        ],
      },

      {
        title: "Understand Your Growth Areas & Hurdles",
        paragraphs: [
          "Knowing your strengths is only one part of personal development.",
          "You may also want to understand areas where you experience difficulty, hesitation, inconsistency or lack of confidence.",
          "The assessment can be used to identify potential growth areas and discuss practical ways to develop relevant skills.",
          "The objective is not to label you as good or bad at something, but to identify opportunities for development.",
        ],
      },

      {
        title: "Personality & Behavioural Tendencies",
        paragraphs: [
          "Your way of approaching people, situations, decisions and challenges can influence your education, career, business and relationships.",
          "Fingerprint Analysis explores behavioural tendencies as part of the overall profile.",
          "Greater self-awareness can help you understand how you respond to situations and where you may benefit from developing greater flexibility, communication or self-management.",
        ],
      },

      {
        title: "Communication & Learning Style",
        paragraphs: [
          "Do you learn best by seeing, listening, doing, discussing, analysing or through another style of engagement?",
          "Do you find certain forms of communication easier than others?",
          "The profile can be used to explore communication tendencies and learning-related patterns.",
          "For students, these insights may help in understanding how to approach learning more effectively and which skills may need additional attention.",
        ],
      },

      {
        title: "Explore Your Brain Ability Profile",
        paragraphs: [
          "The assessment can provide a structured way to explore different ability areas and their relative patterns within the profile.",
          "Instead of looking only at marks or academic performance, the discussion can consider broader abilities and tendencies that may influence how you approach learning, work and problem-solving.",
          "The profile should be used as an additional source of insight rather than as a definitive measurement of intelligence.",
        ],
      },

      {
        title: "Career & Profession — Are You Built for This?",
        paragraphs: [
          "One of the most important questions we explore is whether your chosen profession appears aligned with your perceived natural abilities and behavioural tendencies.",
          "Are you considering medicine, engineering, technology, teaching, management, sales, design, law, finance, media, entrepreneurship or another profession?",
          "The purpose is not to tell you that only one profession is possible for you.",
          "Instead, the assessment can help you explore which kinds of roles, environments and skill areas may be worth considering based on your profile, interests and goals.",
        ],
      },

      {
        title: "For Business Persons & Entrepreneurs",
        paragraphs: [
          "Running a business requires more than an idea. It requires decision-making, communication, adaptability, leadership, persistence, relationship management and the ability to develop the right skills.",
          "Fingerprint Analysis can help a business person explore behavioural tendencies, strengths, growth areas and possible areas of alignment with their entrepreneurial journey.",
          "If you are already in business, the profile can provide another perspective on your working style and areas where you may want to strengthen your capabilities.",
        ],
      },

      {
        title: "Are You Suited to the Role You Are Performing?",
        paragraphs: [
          "Sometimes the problem is not the business itself — it may be the role you are playing within it.",
          "A person may be excellent at creating ideas but dislike repetitive administration. Another may be strong in relationship building but struggle with detailed analysis.",
          "Understanding these differences can help you think about delegation, skill development, team roles and where your own energy may be best directed.",
        ],
      },

      {
        title: "Communication, Leadership & Teamwork",
        paragraphs: [
          "Your behavioural tendencies can influence how you communicate, collaborate and lead.",
          "For professionals and business persons, understanding these tendencies can encourage better self-awareness and more conscious development of communication and leadership skills.",
          "The goal is to help you recognise what you bring naturally and where additional training or practice may be useful.",
        ],
      },

      {
        title: "Identify Skills to Develop",
        paragraphs: [
          "A profile is useful only when it leads to action.",
          "Once potential strengths and development areas have been discussed, the next question is: what should you develop?",
          "The assessment can be used to identify skills that may deserve attention and create a practical development roadmap around your education, profession or business goals.",
        ],
      },

      {
        title: "Don't Waste Years on Unaligned Goals",
        paragraphs: [
          "Sometimes people spend years pursuing goals simply because they have already invested time, money or social expectations into them.",
          "Understanding yourself earlier can help you question whether your current direction genuinely fits your interests, abilities and long-term goals.",
          "The intention is not to create fear about changing direction, but to encourage conscious decision-making before investing further.",
        ],
      },

      {
        title: "Break Limiting Beliefs & Tap Into Hidden Potential",
        paragraphs: [
          "Many people underestimate themselves because of limiting beliefs, past experiences or repeated messages from others.",
          "Self-understanding can create an opportunity to question these assumptions and recognise abilities that may not have been fully developed.",
          "The assessment can become a starting point for exploring potential, building confidence and taking purposeful action.",
        ],
      },

      {
        title: "Break Cycles of Confusion & Misdirection",
        paragraphs: [
          "Sometimes confusion about career, education or life direction continues from one generation to another.",
          "Family expectations, social pressure and inherited ideas about success can strongly influence the choices people make.",
          "Fingerprint Analysis can provide an additional perspective for stepping back, understanding yourself and making choices based on greater self-awareness.",
        ],
      },

      {
        title: "Career, Business & Life-Purpose Alignment",
        paragraphs: [
          "A meaningful professional direction is often influenced by several factors: what you love doing, what you are good at, what the world needs and what you can be paid for.",
          "These different elements can be explored together rather than looking at career choice as a single test result.",
          "The objective is to help you create a direction that is more consciously aligned with your abilities, interests, opportunities and goals.",
        ],
      },

      {
        title: "Create a Roadmap for Your Future",
        paragraphs: [
          "Insight becomes valuable when it can be converted into action.",
          "After understanding the profile, we can discuss possible areas of education, career, business, skill development and personal growth.",
          "The next step is to create a practical roadmap — what to learn, what to improve, what to explore and what actions can move you toward your goals.",
        ],
      },

      {
        title: "For Parents — Understand Before You Decide",
        paragraphs: [
          "Parents naturally want the best future for their children, but sometimes well-intentioned decisions can unintentionally push a child toward a path that may not suit their interests or abilities.",
          "Fingerprint Analysis can provide an additional perspective for conversations about education, learning, strengths and possible career directions.",
          "It should be used alongside the child's interests, academic performance, aptitude, opportunities and personal aspirations.",
        ],
      },

      {
        title: "What Happens in a Fingerprint Analysis Session?",
        paragraphs: [
          "The process begins with fingerprint collection and preparation of the individual's profile according to the assessment methodology being used.",
          "The profile is then discussed in relation to behavioural tendencies, brain-linked abilities, strengths, growth areas, learning and communication patterns, and possible career or professional directions.",
          "The session focuses on understanding the information and connecting it with the individual's real-life situation.",
        ],
      },

      {
        title: "From Information to Actionable Insights",
        paragraphs: [
          "The purpose of the session is not to leave you with a report that simply sits in a file.",
          "The information can be used to start meaningful conversations about education, career, business, skills, relationships, personal development and future goals.",
          "The emphasis is on actionable insights that can help you make more conscious decisions about your next steps.",
        ],
      },

      {
        title: "A Lifelong Tool for Personal Growth",
        paragraphs: [
          "Self-understanding is not something that ends after choosing a career.",
          "As your life changes, the same insights can be revisited in the context of education, work, business, relationships, leadership and personal development.",
          "The profile can therefore become one additional tool for continuing self-reflection and growth.",
        ],
      },

      {
        title: "Who Can Benefit?",
        paragraphs: [
          "Students deciding on their stream, course or career direction.",
          "Parents looking for additional insights while supporting their child's educational choices.",
          "Working professionals considering a career change or seeking greater alignment with their strengths.",
          "Business persons and entrepreneurs exploring their working style, strengths, growth areas and professional direction.",
          "Anyone who wants to understand their abilities better and make more conscious choices about their future.",
        ],
      },

      {
        title: "Your Future Should Be Designed With Awareness",
        paragraphs: [
          "You do not have to spend years moving in a direction simply because you started there.",
          "Understand yourself. Recognise your strengths. Identify areas for development. Explore where your abilities may fit. Then build the skills required to move forward.",
          "The goal is not to predict your future. The goal is to help you understand yourself better so that you can participate more consciously in creating it.",
        ],
      },

      {
        title: "An Important Perspective",
        paragraphs: [
          "Fingerprint Analysis is presented as an interpretive personal-development and career-exploration methodology.",
          "The profile should be considered alongside education, academic performance, interests, experience, professional guidance, opportunities and the individual's own goals.",
          "It should not be treated as a medical diagnosis, neurological diagnosis or definitive scientific determination of intelligence, personality or future success.",
          "The final choice about education, career, profession or business always belongs to the individual.",
        ],
      },
    ],
  },
};
