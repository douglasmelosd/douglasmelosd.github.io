export type Skill = { name: string, level: "Genin" | "Chunin" | "Jounin" };
export type SkillGroup = { title: string, subtitle: string, skills: Skill[] };

export const skillGroups: SkillGroup[] = [
    {
        title: "Ninjutsu",
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
        subtitle: "Hard Skills",
        skills: []
        
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

export type Parallel = { theme: string, naruto: string, douglas: string };

export const parallels: Parallel[] = [
    {
        theme: "Ser julgado sem ser compreendido",
        naruto: "Cresceu rejeitado pela vila por causa da Kyuubi, a Raposa de Nove Caudas, sem que as pessoas reconhecessem quem realmente era.",
        douglas: "Conheço o peso de ser julgado por características que nem sempre são compreendidas: sou autista (TEA nível 1)."
    },
    {
        theme: "Começar por baixo, sem recursos",
        naruto: "Cresceu órfão e sozinho, sem família nem estrutura, e era o último da turma, aquele de quem ninguém esperava nada.",
        douglas: "Comecei sem recursos nem garantias de que chegaria longe. Mesmo assim, concluí a graduação em Ciência da Computação e hoje curso a pós-graduação em IA.",
    },
    {
        theme: "Ser desacreditado e continuar",
        naruto: "Foi desdenhado por muitos e continuou treinando, provando seu valor um passo de cada vez.",
        douglas: "Fui desacreditado e, em alguns momentos, ainda sou. Sigo evoluindo na prática: de suporte e desenvolvimento Full Stack até o protótipo de um agente de IA que desenvolvi na G&P.",
    },
    {
        theme: "Não esconder quem é",
        naruto: "Não esperou aprovação para agir: buscou reconhecimento mostrando, na prática, do que era capaz.",
        douglas: "Não preciso esconder quem sou para demonstrar minhas capacidades.",
    },
    {
        theme: "Construir o próprio caminho",
        naruto: "Seguiu o seu próprio nindō em vez de aceitar o destino que os outros desenharam para ele.",
        douglas: "Minha história não se resume às dificuldades nem a um diagnóstico. Quero construir meu caminho sem perder a vontade de aprender.",
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

export type Contact = { name: string, description: string, label: string, href: string, external: boolean };

export const contacts: Contact[] = [
    { name: "GitHub", description: "Técnicas e projetos", label: "github.com/DouglasMSilva", href: "https://github.com/DouglasMSilva", external: true },
    { name: "LinkedIn", description: "Trajetória e networking", label: "linkedin.com/in/douglas-melo-dev", href: "https://linkedin.com/in/douglas-melo-dev", external: true },
    { name: "WhatsApp", description: "Conversa direta", label: "+55 21 98363-2055", href: "https://wa.me/5521983632055", external: true },
    { name: "E-mail", description: "Propostas e recrutamento", label: "melosilvadouglas7@gmail.com", href: "mailto:melosilvadouglas7@gmail.com", external: false },
];