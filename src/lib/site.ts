export const site = {
  name: "Dr. João Henrique Nagildo",
  cro: "CRO/RS 31162",
  title:
    "Botox e Harmonização Orofacial em São Leopoldo | Dr. João Henrique Nagildo",
  description:
    "Estética facial com planejamento individualizado, naturalidade e segurança clínica. Agende sua avaliação com o Dr. João Henrique Nagildo.",
  url: "https://drjoaonagildo.com.br",
  city: "São Leopoldo",
  region: "RS",
  instagramUrl: "https://www.instagram.com/drjoaonagildo",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    "555194395273",
  whatsappMessage:
    "Olá, Dr. João. Gostaria de agendar uma avaliação para tratamentos faciais.",
  heroImage: "/fotoperfil.jpeg"
};

export const getWhatsappUrl = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

export const treatments = [
  {
    title: "Botox",
    summary:
      "Suavização de linhas de expressão com foco em leveza, equilíbrio e preservação da naturalidade.",
    detail:
      "Indicado após avaliação da musculatura facial, da expressão e dos objetivos de cada paciente."
  },
  {
    title: "Harmonização Orofacial",
    summary:
      "Planejamento facial personalizado para melhorar proporções, contornos e harmonia do rosto.",
    detail:
      "Cada indicação parte da leitura anatômica do rosto, sem padronização e sem exageros."
  },
  {
    title: "Peeling Químico",
    summary:
      "Renovação da pele para melhorar textura, luminosidade e uniformidade.",
    detail:
      "A escolha do protocolo considera tipo de pele, rotina, sensibilidade e objetivo clínico."
  },
  {
    title: "Odontologia Estética",
    summary:
      "Cuidados estéticos para integrar sorriso, face e expressão de forma mais harmônica.",
    detail:
      "O sorriso é avaliado dentro do conjunto facial para preservar proporção, função e naturalidade."
  }
];

export const authorityPoints = [
  "Cirurgião-dentista — CRO/RS 31162",
  "Mestre em Odontologia — PUCRS",
  "Especialista em Odontologia",
  "Fellow em Harmonização Orofacial",
  "Atuação em estética facial e odontologia estética"
];

export const results = [
  {
    title: "Botox",
    label: "Expressão preservada",
    note: "Suavização de linhas preservando movimento, leveza e leitura natural da face.",
    image: "/resultado-botox.png"
  },
  {
    title: "Peeling Químico",
    label: "Textura e luminosidade",
    note: "Planejamento para uma pele com aspecto mais uniforme, viçoso e bem cuidado.",
    image: "/resultado-peeling.png"
  },
  {
    title: "Harmonização",
    label: "Equilíbrio facial",
    note: "Proporção e contorno avaliados com critério para valorizar o que já existe.",
    image: "/resultado-harmonizacao.png"
  }
];

export const processSteps = [
  {
    title: "Avaliação",
    text: "Escuta das queixas, objetivos, histórico de saúde e análise facial."
  },
  {
    title: "Planejamento",
    text: "Indicação do que faz sentido para o seu caso, com limites claros e sem exageros."
  },
  {
    title: "Procedimento",
    text: "Execução técnica e cuidadosa, com foco em precisão, conforto e segurança."
  },
  {
    title: "Acompanhamento",
    text: "Orientações pós-procedimento e retorno quando indicado para acompanhar a evolução."
  }
];

export const trustNotes = [
  {
    quote:
      "Me senti segura desde a avaliação. O Dr. João explicou tudo com calma e respeitou exatamente o que eu buscava.",
    name: "Paciente de harmonização orofacial"
  },
  {
    quote:
      "Gostei da naturalidade do resultado. Ficou leve, sem mudar minha expressão.",
    name: "Paciente de Botox"
  },
  {
    quote:
      "Além do procedimento, recebi orientações claras sobre os cuidados e o acompanhamento.",
    name: "Paciente de estética facial"
  }
];

export const faqs = [
  {
    question: "Botox dói?",
    answer:
      "A aplicação costuma ser rápida e bem tolerada. Durante a avaliação, o Dr. João explica como o procedimento é feito e quais cuidados são indicados."
  },
  {
    question: "Quanto tempo dura o Botox?",
    answer:
      "A duração pode variar conforme organismo, região tratada e planejamento realizado. Em geral, o efeito permanece por alguns meses."
  },
  {
    question: "O resultado fica artificial?",
    answer:
      "O planejamento é feito para preservar a naturalidade. A proposta é suavizar sinais e valorizar os traços, sem mudar sua expressão."
  },
  {
    question: "Qual a diferença entre Botox e preenchimento?",
    answer:
      "O Botox atua principalmente na suavização de linhas de expressão. O preenchimento pode ser indicado para repor volume, melhorar contornos ou equilibrar proporções."
  },
  {
    question: "Quem pode fazer harmonização orofacial?",
    answer:
      "A indicação depende de avaliação individual, histórico de saúde, objetivos e análise facial."
  },
  {
    question: "Quanto tempo leva a consulta?",
    answer:
      "O tempo pode variar conforme o caso, mas a avaliação é conduzida com calma para entender objetivos, explicar possibilidades e alinhar expectativas."
  }
];

export const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.heroImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "BR"
  },
  areaServed: ["São Leopoldo", "Porto Alegre", "Vale dos Sinos"],
  medicalSpecialty: ["Odontologia Estética", "Harmonização Orofacial"],
  priceRange: "$$$",
  sameAs: [site.instagramUrl],
  telephone: `+${site.whatsappNumber}`
};
