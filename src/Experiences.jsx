
const Experiences = () => {
    const experiencesFromFakeApi = [
        {
            id: 1,
            title: "Développeur front",
            company: "Company 1",
            description: "Développement d'une application web front",
            startDate: "2021-01-01",
            endDate: "2021-02-01",
            isCurrent: false,
        },
        {
            id: 2,
            title: "Développeur back",
            company: "Company 2",
            description: "Développement d'une application web back",
            startDate: "2022-02-01",
            endDate: "2022-03-01",
            isCurrent: false,
        },
        {
            id: 3,
            title: "Développeur fullstack",
            company: "Company 3",
            description: "Développement d'une application web fullstack",
            startDate: "2023-03-01",
            endDate: null,
            isCurrent: true,
        },
    ];

    return (
        <div>
            <h2>Expériences professionnelles</h2>
            {experiencesFromFakeApi.map((experience) => (
                <div key={experience.id} className={experience.isCurrent ? 'current-experience' : 'experience'}>
                    <h3>{experience.title}</h3>
                    <p>Entreprise: {experience.company}</p>
                    <p>Description: {experience.description}</p>
                    <p>Date de début: {experience.startDate}</p>
                    {experience.endDate && <p>Date de fin: {experience.endDate}</p>}
                </div>
            ))}
        </div>
    );
};

export default Experiences;
