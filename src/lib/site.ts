export const site = {
  name: "Dr. João Henrique Nagildo",
  shortName: "Dr. João Nagildo",
  cro: "CRO/RS 31162",
  title:
    "Harmonização Orofacial e Botox em São Leopoldo | Dr. João Henrique Nagildo",
  description:
    "Harmonização orofacial, Botox, peeling químico e odontologia estética com planejamento individualizado, segurança clínica e naturalidade.",
  url: "https://drjoaonagildo.com.br",
  city: "São Leopoldo",
  region: "RS",
  instagramHandle: "@dentistajoaonagildo",
  instagramUrl: "https://www.instagram.com/dentistajoaonagildo",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    "555194395273",
  whatsappMessage:
    "Olá, Dr. João. Gostaria de agendar uma avaliação para tratamentos faciais.",
  heroImage: "/fotoperfil.jpeg"
};

export const getWhatsappUrl = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const treatments = [
  {
    title: "Harmonização Orofacial",
    summary:
      "Planejamento facial para equilibrar contornos, proporções e expressão com naturalidade.",
    icon: "spark"
  },
  {
    title: "Botox",
    summary:
      "Suavização de linhas de expressão com foco em leveza e preservação dos movimentos.",
    icon: "needle"
  },
  {
    title: "Peeling Químico",
    summary:
      "Renovação da pele para melhorar textura, luminosidade e uniformidade com indicação criteriosa.",
    icon: "drop"
  },
  {
    title: "Odontologia Estética",
    summary:
      "Cuidados estéticos para integrar sorriso, face e expressão de forma harmônica.",
    icon: "smile"
  },
  {
    title: "Clareamento Dental",
    summary:
      "Protocolos seguros para melhorar a luminosidade do sorriso com critério clínico.",
    icon: "shine"
  },
  {
    title: "Lentes de Contato Dental",
    summary:
      "Planejamento estético para forma, cor e proporção do sorriso de maneira natural.",
    icon: "diamond"
  }
];

export const proofPoints = [
  site.cro,
  "Especialista e Mestre pela PUCRS",
  "Fellow em Harmonização Orofacial"
];

export const authorityPoints = [
  "Especialista e Mestre em Odontologia pela PUCRS",
  "Fellow em Harmonização Orofacial",
  "Atendimento estritamente individualizado",
  "Ética profissional e busca contínua por excelência"
];

export const results = [
  {
    title: "Botox Preventivo",
    label: "Expressão preservada",
    note: "Suavização de linhas com planejamento para manter leveza e naturalidade.",
    image: "/resultado-botox.png"
  },
  {
    title: "Peeling Químico",
    label: "Textura e luminosidade",
    note: "Indicação para melhorar viço, uniformidade e qualidade visual da pele.",
    image: "/resultado-peeling.png"
  },
  {
    title: "Harmonização Facial",
    label: "Equilíbrio facial",
    note: "Proporções, contornos e expressão avaliados com critério individual.",
    image: "/resultado-harmonizacao.png"
  },
  {
    title: "Odontologia Estética",
    label: "Sorriso e face",
    note: "Integração entre estética do sorriso, leitura facial e objetivos pessoais.",
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
    text: "Indicação do que faz sentido para o seu caso, com limites claros."
  },
  {
    title: "Procedimento",
    text: "Execução técnica, cuidadosa e segura."
  },
  {
    title: "Acompanhamento",
    text: "Orientações pós-procedimento e retorno quando indicado."
  }
];

export const differentiators = [
  {
    title: "Resultados naturais",
    text: "Foco em realçar sua beleza sem artificializar a expressão."
  },
  {
    title: "Planejamento individualizado",
    text: "Cada decisão considera rosto, rotina, objetivos e histórico clínico."
  },
  {
    title: "Formação de excelência",
    text: "Especialização, mestrado e atualização contínua aplicados na prática."
  },
  {
    title: "Atendimento humanizado",
    text: "Consulta com escuta, explicação objetiva e acolhimento."
  },
  {
    title: "Segurança clínica",
    text: "Indicação responsável, técnica precisa e orientação completa."
  },
  {
    title: "Ambiente premium",
    text: "Atendimento com hora marcada, privacidade e atenção aos detalhes."
  }
];

export const testimonials = [
  {
    quote:
      "Sempre tive receio de fazer Botox e ficar artificial. O Dr. João explicou tudo com calma e o resultado ficou muito natural.",
    name: "Paciente de Botox",
    initials: "C"
  },
  {
    quote:
      "Gostei da clareza na avaliação. Ele ouviu o que eu queria e indicou somente o que fazia sentido para mim.",
    name: "Paciente de harmonização",
    initials: "R"
  },
  {
    quote:
      "O atendimento passa segurança desde o primeiro contato. Tudo foi feito com cuidado, sem exageros.",
    name: "Paciente de estética facial",
    initials: "H"
  }
];

export const faqs = [
  {
    question: "O Botox deixa o rosto artificial?",
    answer:
      "Quando bem planejado, o objetivo é suavizar linhas sem travar a expressão. A dose e os pontos são definidos após avaliação."
  },
  {
    question: "A harmonização orofacial dói?",
    answer:
      "A sensibilidade varia conforme o procedimento e o paciente. Durante a avaliação, o Dr. João explica como cada etapa é conduzida e quais cuidados são indicados."
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer:
      "A duração depende do tratamento, metabolismo, região tratada e resposta individual. Isso é alinhado antes do procedimento."
  },
  {
    question: "Como funciona a avaliação inicial?",
    answer:
      "A consulta inclui escuta dos objetivos, análise facial, histórico de saúde, explicação das possibilidades e definição de um plano individual."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "As condições são informadas no atendimento pelo WhatsApp, de acordo com o procedimento indicado."
  }
];

export const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.heroImage}`,
  telephone: `+${site.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "BR"
  },
  areaServed: ["São Leopoldo", "Porto Alegre", "Vale dos Sinos"],
  medicalSpecialty: ["Odontologia Estética", "Harmonização Orofacial"],
  priceRange: "$$$",
  sameAs: [site.instagramUrl]
};
