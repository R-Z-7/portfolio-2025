import { Github, Linkedin, Mail, FileText, Terminal, Cloud, Server, Shield, Monitor } from "lucide-react";

export const profile = {
    personal: {
        name: "Ramees Kallan",
        location: "Leeds, United Kingdom",

        headline: "IT Support Technician / Field Support → Cloud & DevOps",
        email: "ramees.jobs.uk@gmail.com",
        phone: "+44 7799 579462",
        githubUrl: "https://github.com/R-Z-7",
        linkedinUrl: "https://www.linkedin.com/in/rameezz/",
        resumeUrl: "https://drive.google.com/file/d/1y4BL0VJddRN6wf-KtYk8iis7F6Utju8W/view?usp=sharing",
    },
    summary: [
        "IT Support Technician with hands-on experience delivering deskside, service desk, and field support in enterprise environments.",
        "Skilled in Microsoft 365 administration, Windows Server, Active Directory, Azure fundamentals, and network troubleshooting.",
        "Currently transitioning into a DevOps role, leveraging strong problem-solving capabilities, automation interests, and MSP-style support experience."
    ],
    skills: {
        highlight: ["Microsoft 365", "Windows Server", "Active Directory", "Azure Fundamentals", "ServiceNow", "Linux Basics"],
        grouped: [
            {
                title: "IT Support & Administration",
                icon: Monitor,
                items: ["Microsoft 365 Admin", "Exchange Online", "Active Directory (AD)", "Group Policy (GPO)", "ServiceNow", "Hardware/Peripherals", "Windows/macOS Support"]
            },
            {
                title: "Networking & Security",
                icon: Shield,
                items: ["DNS / DHCP", "VPN Configuration", "Firewalls", "Network Patching", "SSL/TLS", "SFTP"]
            },
            {
                title: "Cloud & DevOps Learning",
                icon: Cloud,
                items: ["Azure Administration", "Terraform (IaC)", "Docker Basics", "GitHub Actions", "Hyper-V / VMware", "Linux Server Basics"]
            }
        ]
    },
    experience: [
        {
            role: "Onsite IT Technician",
            company: "Cerco IT Ltd",

            period: "Dec 2025 – Present",
            type: "Current",
            tags: ["Hardware", "Windows", "Networking", "Troubleshooting"],
            achievements: [
                "PC Operating Systems, Hardware, and Device Resources",
                "Microsoft Windows Installation & Configuration",
                "Networking (Peer-to-Peer & Client/Server)",
                "Printer Technology and Troubleshooting",
                "Communication Standards & Remote Technologies",
                "Laptop Maintenance & Biometric Device Configuration"
            ]
        },
        {
            role: "Onsite IT Support Technician (Contract)",
            company: "DXC Technology",

            period: "Feb 2025 – Dec 2025",
            type: "Past",
            tags: ["Windows/macOS", "M365", "ServiceNow", "Azure"],
            achievements: [
                "Provide deskside and field support accross Windows and macOS devices, resolving hardware and software issues.",
                "Administer Microsoft 365, Exchange, access management, and software deployment.",
                "Perform Active Directory user/group administration and Group Policy updates.",
                "Support Azure cloud services and carry out basic cloud administration tasks.",
                "Manage ITSM workflows through ServiceNow, ensuring accurate ticket logging and SLA compliance."
            ]
        },
        {
            role: "Co-Founder",
            company: "Wincept Technologies Pvt Ltd",
            location: "Kerala, India",
            period: "Jan 2017 – Jan 2022",
            type: "Past",
            tags: ["Linux", "WordPress", "Hosting", "Support"],
            achievements: [
                "Delivered WordPress development, server setups, SSL/TLS configuration, and SFTP solutions.",
                "Conducted Linux server administration, troubleshooting, and 2nd–3rd line style technical support.",
                "Managed client requirements, service delivery, and customer relationship management."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Talrop Private Limited",
            location: "Kerala, India",
            period: "Aug 2019 – Apr 2022",
            type: "Past",
            tags: ["Flutter", "React", "Mobile Dev"],
            achievements: [
                "Developed mobile applications using Flutter for Android and iOS.",
                "Built responsive web interfaces using HTML, CSS, JavaScript, and React.js.",
                "Created UI/UX wireframes and prototypes for new features.",
                "Supported embedded system integrations and testing activities."
            ]
        }
    ],
    other_experience: [
        {
            role: "Sales Associate",
            company: "SPAR UK",
            period: "Aug 2023 – Mar 2025"
        },
        {
            role: "Warehouse Operative",
            company: "ASDA Chilled Warehouse, Wakefield",
            period: "Aug 2024 – Sep 2024"
        },
        {
            role: "Warehouse Operative",
            company: "The Serious Sweet Company, Harrogate",
            period: "Jun 2024 – Jul 2024"
        },
        {
            role: "Sales Assistant (Ice Cream Van Driver)",
            company: "Royd Ices, Mytholmroyd",
            period: "Jun 2023 – Aug 2023"
        },
        {
            role: "Delivery Driver",
            company: "Domino’s Pizza UK & Ireland",
            period: "Feb 2023 – Aug 2023"
        }
    ],
    education: [
        {
            degree: "MSc Information Technology",
            grade: "Merit",
            institution: "Leeds Beckett University, UK",
            period: "2023 – 2024"
        },
        {
            degree: "Bachelor of Computer Applications",
            grade: "First Class",
            institution: "University of Calicut, India",
            period: "2019 – 2022"
        }
    ],
    certifications: [
        "AWS Academy Graduate – Cloud Architecting",
        "AWS Academy Graduate – Cloud Foundations",
        "ITOL Accredited Course Certificate (Cerco – 7-Day Training)",
        "AI & Machine Learning Workshop – IIT Bombay",
        "Ethical Hacking Workshop – Robokart"
    ],
    learning: ["Azure", "Terraform", "Docker", "GitHub Actions", "Linux"],
    projects: [
        {
            title: "Azure Landing Zone",
            category: "Cloud",
            tech: ["Terraform", "Azure", "GitHub Actions"],
            description: "Deployed a secure Azure landing zone using Terraform. Includes VNETs, NSGs, and resource groups for a scalable foundation.",
            github: "https://github.com",
            live: "#",
            featured: true
        },
        {
            title: "CI/CD Pipeline Demo",
            category: "DevOps",
            tech: ["Docker", "GitHub Actions", "Azure ACR"],
            description: "Automated build and deploy pipeline for a containerised application to Azure Web Apps, ensuring consistent deployments.",
            github: "https://github.com",
            live: "#",
            featured: true
        },
        {
            title: "Monitoring Stack",
            category: "Automation",
            tech: ["Prometheus", "Grafana", "Linux"],
            description: "Deployed a local monitoring stack to track server performance metrics (CPU, RAM) and alert on high usage thresholds.",
            github: "https://github.com",
            featured: false
        },
        {
            title: "IaC Templates Repo",
            category: "Cloud",
            tech: ["Terraform", "Bicep", "AWS"],
            description: "A collection of reusable Infrastructure as Code templates for common cloud resources and architectural patterns.",
            github: "https://github.com",
            featured: false
        }
    ]
};
