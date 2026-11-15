export type Skill = { name: string, level: "Genin" | "Chunin" | "Jounin" };
export type SkillGroup = { title: string, subtitle: string, skills: Skill[] };

export const skillGroups: SkillGroup[] = [
    {
        title: "Fuinjutsu",
        subtitle: "Desenvolvimento e Programação",
        skills: [
            { name: "Python, FastAPI", level: "Genin" },
            { name: "JavaScript, TypeScript, Node.js", level: "Chunin" },
            { name: "React e React Native", level: "Genin" },
        ]
    },

    {
        title: "Ninjutsu",
        subtitle: "Agentes e Automação",
        skills: [
            { name: "LangChain e Ollama", level: "Genin" },
            { name: "LangGraph", level: "Genin" }
        ],
    },

    {
        title: "Taijutsu",
        subtitle: "Hard Skills (Fundamentos)",
        skills: [
            { name: "Lógica de Programação e Algoritmos", level: "Genin" },
            { name: "Estrutura de dados", level: "Genin" },
            { name: "Git e GitHub", level: "Genin" },
            { name: "SQL", level: "Genin" },
        ],
        
    },

    {
        title: "Genjutsu",
        subtitle: "UX Research & UI",
        skills: [
            { name: "CSS", level: "Chunin" },
            { name: "Bootstrap", level: "Genin" },
            { name: "HTML", level: "Chunin" }
        ],
    },

    {
        title: "Armas Ninja",
        subtitle: "Low-code & No-code",
        skills: [
            { name: "Microsoft Power Platform - Power Apps & Power Automate" , level: "Genin"},
            { name: "Microsoft Copilot Studio", level: "Genin" },
        ],
    }
];

export type Parallel = { theme: string, naruto: string, douglas: string, image?: string };

export const parallels: Parallel[] = [
    {
        theme: "Ser julgado sem ser compreendido",
        naruto: "Cresceu rejeitado pela vila por causa da Kyuubi, a Raposa de Nove Caudas, sem que as pessoas reconhecessem quem realmente era.",
        douglas: "Conheço o peso de ser julgado por características que nem sempre são compreendidas: sou autista (TEA nível 1).",
        image: "/assets/parallel1.png"
    },
    {
        theme: "Começar por baixo, sem recursos",
        naruto: "Cresceu órfão e sozinho, sem família nem estrutura, e era o último da turma, aquele de quem ninguém esperava nada.",
        douglas: "Comecei sem recursos nem garantias de que chegaria longe. Mesmo assim, concluí a graduação em Ciência da Computação e hoje curso a pós-graduação em IA.",
        image: "/assets/parallel2.png"
    },
    {
        theme: "Ser desacreditado e continuar",
        naruto: "Foi desdenhado por muitos e continuou treinando, provando seu valor um passo de cada vez.",
        douglas: "Fui desacreditado e, em alguns momentos, ainda sou. Sigo evoluindo na prática: de suporte e desenvolvimento Full Stack até o protótipo de um agente de IA que desenvolvi na G&P.",
        image: "/assets/parallel3.jpeg"
    },
    {
        theme: "Não esconder quem é",
        naruto: "Não esperou aprovação para agir: buscou reconhecimento mostrando, na prática, do que era capaz.",
        douglas: "Não preciso esconder quem sou para demonstrar minhas capacidades.",
        image: "/assets/parallel4.jpg"
    },
    {
        theme: "Construir o próprio caminho",
        naruto: "Seguiu o seu próprio nindō em vez de aceitar o destino que os outros desenharam para ele.",
        douglas: "Minha história não se resume às dificuldades nem a um diagnóstico. Quero construir meu caminho sem perder a vontade de aprender.",
        image: "/assets/parallel5.jpg"
    },
];

export type Tech =
    | "React" | "React Native" | "Expo" | "TypeScript" | "Node.js" | "Express"
    | "Python" | "FastAPI" | "MySQL" | "PyTorch"
    | "LangChain" | "LangGraph" | "Ollama"
    | "Power Automate" | "Copilot Studio";

export type Rank = "D" | "C" | "B" | "A" | "S";
export type Area = "Front-end" | "Back-end" | "Mobile" | "Banco de Dados" | "IA";
export type Status = "Concluído" | "Em andamento";

export type Project = {
    mission: string,
    rank: Rank,
    area: Area,
    status: Status,
    description: string,
    techs: Tech[],
    repo?: string,
};

export const projects: Project[] = [
    {
        mission: "Chatbot com IA generativa",
        rank: "B",
        area: "IA",
        status: "Em andamento",
        description: "Chatbot que processa solicitações com LLMs e usa ferramentas para consultar o banco MySQL.",
        techs: ["Python", "FastAPI", "LangChain", "Ollama", "MySQL"],
    },
];

export type CareerMission = {
    id: string,
    title: string,
    rank: Rank,
    focus: string,
    description: string,
    highlights: string[],
    tools: string[],
};

export const careerMissions: CareerMission[] = [
    {
        id: "formacao",
        title: "Construir a base na Academia Ninja",
        rank: "D",
        focus: "Formação em Computação e Inteligência Artificial",
        description: "Concluí a graduação em Ciência da Computação e atualmente curso a pós-graduação em Inteligência Artificial.",
        highlights: ["Bacharelado concluído", "Pós-graduação em andamento"],
        tools: [],
    },
    {
        id: "campo-ti",
        title: "Missões de campo em TI",
        rank: "C",
        focus: "Suporte, operações e desenvolvimento Full Stack",
        description: "Reúno mais de três anos de experiência prática atuando entre suporte, operações de TI e desenvolvimento Full Stack.",
        highlights: ["Resolução de problemas de TI", "Experiência prática em desenvolvimento"],
        tools: [],
    },
    {
        id: "agente-ia-gp",
        title: "Missão especial de IA na G&P",
        rank: "B",
        focus: "Agentes e automação",
        description: "Criei um protótipo de agente de IA no Copilot Studio, estruturei fluxos no Power Automate, integrei a solução ao SharePoint e a publiquei no Microsoft Teams.",
        highlights: ["Protótipo de agente de IA", "Automação integrada ao ambiente Microsoft"],
        tools: ["Copilot Studio", "Power Automate", "SharePoint", "Microsoft Teams"],
    },
    {
        id: "projetos-independentes",
        title: "Treinamento contínuo: projetos independentes",
        rank: "A",
        focus: "IA aplicada e engenharia de software",
        description: "Desenvolvo aplicações, modelos de Machine Learning, APIs e um chatbot em andamento, levando o aprendizado para projetos práticos.",
        highlights: ["Modelos de Machine Learning", "APIs e aplicações", "Chatbot em desenvolvimento"],
        tools: ["PyTorch", "FastAPI", "scikit-learn", "LangChain", "Ollama", "Node.js", "Java", "React"],
    },
];

export type ProfessionalFacet = {
    id: string,
    role: string,
    title: string,
    history: string,
    skills: string,
    achievements: string,
};

export const professionalFacets: ProfessionalFacet[] = [
    {
        id: "animator",
        role: "Animador",
        title: "Animação e narrativa visual",
        history: "Dou movimento e expressão a ideias por meio da animação.",
        skills: "Criatividade, ritmo, percepção de movimento, composição e narrativa visual.",
        achievements: "Em breve.",
    },
    {
        id: "communicator",
        role: "Comunicador",
        title: "Comunicação e troca de ideias",
        history: "Transformo ideias em mensagens que aproximam pessoas e ajudam a compartilhar histórias.",
        skills: "Expressão, escuta, clareza e adaptação da mensagem ao público.",
        achievements: "Em breve.",
    },
    {
        id: "writer",
        role: "Escritor",
        title: "Escrita e produção criativa",
        history: "Atuação como escritor.",
        skills: "Imaginação, construção narrativa, expressão, desenvolvimento de ideias e comunicação escrita.",
        achievements: "Em breve.",
    },
    {
        id: "artist",
        role: "Artista",
        title: "Desenho e expressão artística",
        history: "Exploro ideias e sentimentos por meio do desenho e da criação visual.",
        skills: "Observação, composição, criatividade, experimentação e desenvolvimento de conceitos visuais.",
        achievements: "Em breve.",
    },
];

export type ContactName = "GitHub" | "LinkedIn" | "WhatsApp" | "E-mail";
export type Contact = { name: ContactName, description: string, label: string, href: string, external: boolean };

export const contacts: Contact[] = [
    { name: "GitHub", description: "Técnicas e projetos", label: "github.com/DouglasMSilva", href: "https://github.com/DouglasMSilva", external: true },
    { name: "LinkedIn", description: "Trajetória e networking", label: "linkedin.com/in/douglas-melo-dev", href: "https://linkedin.com/in/douglas-melo-dev", external: true },
    { name: "WhatsApp", description: "Conversa direta", label: "+55 21 98363-2055", href: "https://wa.me/5521983632055", external: true },
    { name: "E-mail", description: "Propostas e recrutamento", label: "melosilvadouglas7@gmail.com", href: "mailto:melosilvadouglas7@gmail.com", external: false },
];