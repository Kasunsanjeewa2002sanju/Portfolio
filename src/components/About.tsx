import { GraduationCap, Users, Code, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import sliitLogoAsset from '@/assets/sliit.png';
import icbtLogoAsset from '@/assets/ICBT.png';
import aiesecLogoAsset from '@/assets/aieseclight .jpeg';

const About = () => {
  const sliitLogo = sliitLogoAsset;
  const icbtLogo = icbtLogoAsset;
  const aiesecLogo = aiesecLogoAsset;

  const skills = [
  { category: 'Frontend', items: ['React.js','React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Material-UI'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'ASP.NET Core', 'RESTful APIs'] },
  { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'C#', 'Java', 'Kotlin', 'SQL', 'Python'] },
  { category: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase', 'Microsoft SQL Server'] },
  { category: 'Mobile Development', items: ['Android Development', 'Kotlin', 'React Native', 'Flutter (optional)'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Figma', 'Postman', 'Docker', 'Firebase'] },
];


  const education = [
    {
      title: 'BSc (Hons) in Information Technology',
      subtitle: 'Specialization in Software Engineering',
      institution: 'Sri Lanka Institute of Information Technology',
      period: '2021 - 2025',
      icon: (
        <img
          src={sliitLogo}
          alt="SLIIT"
          className="h-10 w-auto"
          onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
        />
      ),
    },
    {
      title: 'Diploma in DICT',
      institution: 'ICBT Kandy Campus',
      period: '2020 - 2021',
      icon: (
        <img
          src={icbtLogo}
          alt="ICBT"
          className="h-10 w-auto"
          onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
        />
      ),
    },
  ];

  const experience = [
    {
      title: 'Leadership Experience',
      subtitle: 'AIESEC in SLIIT Kandy UNI',
      description: 'Led the Outgoing Global Volunteer (OGV) program, managing international volunteer opportunities and fostering cross-cultural exchanges. As Marketing Team Leader, strategized and executed campaigns to increase engagement and brand visibility, enhancing the organization’s impact on campus and beyond.',
      icon: (
        <div className="h-8 w-28 relative">
          <img
            src={aiesecLogo}
            alt="AIESEC"
            className="h-auto w-auto"
            onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
          />
        </div>
      ),
    },
    {
      title: 'University Activities',
      subtitle: 'Adventure Club Co-Founder',
      description: 'Co-founded and led the University Adventure Club, organizing outdoor events and team-building activities to promote leadership, collaboration, and personal growth among students.',
      icon: <Code className="h-6 w-6" />,
    },

  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">I'M KASUN SANJEEWA</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
 Passionate Full Stack Web and Mobile App Developer dedicated to creating exceptional digital experiences. With a user-focused approach and keen attention to detail, I transform ideas into intuitive, responsive, and visually engaging applications using modern web and mobile technologies.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently pursuing my BSc (Hons) in Information Technology with specialization in Software Engineering,
              I combine academic knowledge with practical experience to deliver high quality solutions.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            {education.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-card border border-border flex items-center justify-center overflow-hidden">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    {item.subtitle && (
                      <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                    )}
                    <p className="text-muted-foreground mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Experience & Leadership</h3>
            {experience.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-primary text-sm mb-2">{item.subtitle}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">My Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom section with process */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12">
            <span className="text-gradient">SKETCH</span> — DESIGN — DEVELOPMENT
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every successful product begins with a clear vision. I transform ideas into strategic designs and bring them to life through clean, scalable code. My process ensures a seamless transition from concept to launch, with a strong emphasis on performance, usability, and long-term maintainability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;