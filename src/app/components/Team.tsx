const team = [
  {
    image: '/images/adria copy.jpeg',
    name: 'Adria Mooney',
    title: 'Founder, MyTask Labs',
    bio: 'Adria leads the strategy and implementation work at MyTask Labs to untangle complex workflows and remove bottlenecks.',
  },
  {
    image: '/images/chenchen copy.jpeg',
    name: 'Chen Chen',
    title: 'AI Systems Engineer',
    bio: 'Chen specializes in designing robust AI pipelines that are reliable in production, not just impressive in demos.',
  },
  {
    image: '/images/jms copy.jpeg',
    name: 'James DiPadua',
    title: 'Operations & Workflow Architect',
    bio: 'James works with teams to translate messy real-world processes into clear, structured workflows.',
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The people behind MyTask Labs—focused on making automation practical and reliable
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center overflow-hidden rounded-full w-32 h-32 mx-auto transition-transform duration-500 group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center transition-colors duration-300 group-hover:text-indigo-600">
                {member.name}
              </h3>
              <p className="text-indigo-600 text-sm font-medium mb-4 text-center">
                {member.title}
              </p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
