import { skillGroups } from '../data';

export default function Skills() {
  return (
        <section id="habilidades">
            <h2>Habilidades</h2>
            <div className="grid">
                {skillGroups.map((group) => (
                    <article className="card" key={`${group.title} - ${group.subtitle}`}>
                        <h3>{group.title}</h3>
                        <p className="mut">{group.subtitle}</p>
                        {group.skills.length > 0 ? (
                            group.skills.map((skill) => (
                                <div className="skill" key={skill.name}>
                                    <span>{skill.name}</span>
                                    <em>{skill.level}</em>
                                </div>
                            ))
                        ): (<span className="mut">Em breve</span>)}                        
                    </article>
                ))}
            </div>
        </section>

  )
}
