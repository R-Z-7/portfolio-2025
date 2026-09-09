import { Github, Linkedin, Mail, FileText, Terminal, Cloud, Server, Shield, Monitor, Router, Network, Activity, Radio, Wifi, LucideIcon } from "lucide-react";

export interface ProjectItem {
    title: string;
    category: string;
    tech: string[];
    description: string;
    github?: string;
    live?: string;
    featured?: boolean;
}

export const profile = {
    personal: {
        name: "Ramees Kallan",
        location: "Leeds, West Yorkshire",
        headline: "Network Support Engineer | Infrastructure & Network Support",
        subheadline: "Field & Deskside Infrastructure Support • Network Upgrades & Migrations • Cisco CCNA (In Progress)",
        email: "ramees.kallan@outlook.com",
        phone: "+44 7799 579462",
        githubUrl: "https://github.com/R-Z-7",
        linkedinUrl: "https://www.linkedin.com/in/rameezz/",
        portfolioUrl: "https://ramees.netlify.app",
        resumeUrl: "https://drive.google.com/file/d/1y4BL0VJddRN6wf-KtYk8iis7F6Utju8W/view?usp=sharing",
        additionalInfo: [
            "Full UK Driving Licence & Transport",
            "Based in Leeds, West Yorkshire",
            "Available for Hybrid, Onsite & Multi-Site Roles",
            "Strong focus on Cisco, Fortinet, Meraki & Juniper"
        ]
    },
    summary: [
        "Network Support and Infrastructure Engineer with hands-on experience supporting, configuring, and troubleshooting network infrastructure across live multi-site environments. Experienced with routers, switches, wireless access points, DHCP, DNS, TCP/IP, VPNs, Wi-Fi, port configuration, network migrations, and connectivity testing.",
        "Currently delivering second-line and field-based infrastructure support through Cerco Ltd across client environments, including network upgrade and migration activities with Agora Solutions. Experienced in router, switch, and wireless AP installation and configuration, live site cutovers, network fault isolation, post-deployment validation, and working alongside remote network teams.",
        "Strong background in SLA-driven technical support, ServiceNow, Microsoft 365, and Active Directory, combined with previous Linux server administration and client-facing technical support experience. Currently preparing for the Cisco CCNA certification and looking to develop further across Cisco, Fortinet, Meraki, and Juniper technologies within a multi-vendor network engineering environment."
    ],
    skills: {
        highlight: [
            "Routers & Switches",
            "DHCP & DNS",
            "TCP/IP & Subnetting",
            "Wireless APs & Wi-Fi",
            "Network Migrations",
            "ServiceNow & ITSM"
        ],
        grouped: [
            {
                title: "Network Infrastructure & Deployment",
                icon: Router,
                items: [
                    "Routers & Managed Switches",
                    "Wireless Access Points (APs)",
                    "Switch-Port Config & Patching",
                    "LAN/WAN & Subnetting Fundamentals",
                    "Hardware Refresh & Device Deployment",
                    "Cable Management & Physical Checks"
                ]
            },
            {
                title: "Protocols, Services & Troubleshooting",
                icon: Activity,
                items: [
                    "TCP/IP, Gateways & IP Addressing",
                    "DHCP & DNS Troubleshooting",
                    "VPN & Secure Remote Access",
                    "Wi-Fi & Connectivity Fault Isolation",
                    "Structured Network Fault Isolation",
                    "End-to-End Connectivity Validation"
                ]
            },
            {
                title: "Network Projects & Operations",
                icon: Network,
                items: [
                    "Multi-Site Network Migrations",
                    "Live Cutovers & Deployment Windows",
                    "Post-Deployment Validation",
                    "Device Reachability & Service Checks",
                    "Remote Network Team Collaboration",
                    "Technical Documentation & Site Records"
                ]
            },
            {
                title: "Systems, Microsoft & ITSM",
                icon: Server,
                items: [
                    "ServiceNow Incident & SLA Management",
                    "Active Directory & Group Policy (GPO)",
                    "Microsoft 365 & Exchange Online",
                    "Windows 10/11, macOS & Windows Server",
                    "Linux Server Administration",
                    "PowerShell, AWS & Git/GitHub"
                ]
            }
        ]
    },
    experience: [
        {
            role: "Onsite IT Engineer / Infrastructure & Network Support Engineer",
            company: "Cerco Ltd",
            location: "Leeds / UK Client Sites",
            period: "Jan 2025 – Present",
            type: "Current",
            tags: ["Network Infrastructure", "Routers & Switches", "DHCP/DNS", "ServiceNow", "Field Support"],
            achievements: [
                "Deliver second-line, deskside and field-based technical support across multi-site client environments, covering infrastructure, networking, endpoints and business-critical IT equipment.",
                "Configure, install, replace and troubleshoot routers, switches and wireless access points during network deployments, upgrades and site refresh activities.",
                "Perform DHCP and DNS troubleshooting, IP configuration checks, gateway validation and structured connectivity testing to identify and resolve network access problems.",
                "Carry out switch-port configuration and patching activities, validate physical and logical connectivity, and confirm successful service restoration following infrastructure changes.",
                "Troubleshoot LAN, Wi-Fi and VPN connectivity issues using structured fault-isolation techniques and coordinate complex incidents with remote infrastructure and network teams.",
                "Support Windows 10/11 and macOS endpoints, Microsoft 365, Exchange Online and Active Directory environments alongside network responsibilities.",
                "Manage incidents and service requests through ServiceNow, maintaining accurate technical notes, prioritisation, stakeholder updates and SLA-aligned progression.",
                "Perform endpoint imaging, software installation, RAM/SSD upgrades, printer/MFP configuration, AV support and peripheral troubleshooting.",
                "Maintain asset and configuration records and provide clear technical documentation following installation, troubleshooting and infrastructure work.",
                "Support and mentor new field engineers by explaining deployment processes, troubleshooting methodology, client-site procedures and documentation standards."
            ]
        },
        {
            role: "Network Upgrade & Migration Project",
            company: "Agora Solutions",
            location: "UK Multi-Site Project",
            period: "2025 – Present",
            type: "Project",
            tags: ["Network Migrations", "Live Cutovers", "Switch/Router Config", "Connectivity Testing", "Port Patching"],
            achievements: [
                "Support multi-site network upgrade and migration activities across operational client locations while minimising service disruption.",
                "Install, replace and configure routers, switches, wireless access points and modems as part of network infrastructure refresh programmes.",
                "Configure network devices and verify IP addressing, DHCP operation, network access and device connectivity following installation.",
                "Perform port patching, switch-port validation, cable management and physical network checks during deployment and migration work.",
                "Conduct post-installation connectivity testing to verify device reachability, network stability and successful service restoration.",
                "Diagnose and resolve connectivity issues during and after migrations, escalating complex faults to remote network engineering teams with clear technical information.",
                "Work closely with remote engineering teams during live cutovers, following implementation plans and completing site activities within defined deployment windows.",
                "Maintain accurate records of installed devices, network changes, connectivity results and completed implementation activities."
            ]
        },
        {
            role: "Onsite IT / Infrastructure Support Engineer",
            company: "DXC Technology (via Cerco Ltd)",
            location: "UK Client Project",
            period: "Feb 2025 – Dec 2025",
            type: "Past",
            tags: ["Enterprise Support", "Port Patching", "ServiceNow", "Infrastructure Troubleshooting"],
            achievements: [
                "Delivered onsite technical and infrastructure support within a large-scale enterprise client environment.",
                "Supported network connectivity, port patching and infrastructure troubleshooting alongside Windows endpoint and business application support.",
                "Diagnosed hardware, software and connectivity incidents and coordinated escalations with specialist resolver teams where required.",
                "Supported deployment and replacement of client equipment while ensuring accurate asset control, configuration records and operational testing.",
                "Managed incidents and service requests through ServiceNow while maintaining clear communication with users and technical teams."
            ]
        },
        {
            role: "Co-Founder / Technical Support Lead",
            company: "Wincept Technologies Pvt Ltd",
            location: "Kerala, India",
            period: "Jan 2017 – Jan 2022",
            type: "Past",
            tags: ["Linux Administration", "Web Infrastructure", "SSL/TLS & SFTP", "2nd/3rd Line Support"],
            achievements: [
                "Delivered technical infrastructure and application support to multiple business clients, including server setup, troubleshooting and web infrastructure.",
                "Administered Linux-based servers and supported hosting environments, domain configuration and service availability issues.",
                "Configured SSL/TLS certificates and secure SFTP/FTP connectivity for hosted applications and client environments.",
                "Provided second and third-line style technical troubleshooting across server, application and connectivity issues.",
                "Worked directly with clients to gather technical requirements, investigate faults, coordinate implementations and communicate resolutions."
            ]
        },
        {
            role: "Software Engineer Intern",
            company: "Talrop Private Limited",
            location: "Kerala, India",
            period: "Aug 2019 – Apr 2022",
            type: "Past",
            tags: ["React.js", "JavaScript", "Flutter", "Git/GitHub"],
            achievements: [
                "Developed and supported web and mobile applications using React.js, JavaScript, HTML, CSS and Flutter.",
                "Investigated application and deployment issues using structured troubleshooting and problem-solving techniques.",
                "Supported client onboarding, documentation, demonstrations and technical issue resolution.",
                "Worked collaboratively using Git/GitHub and software development lifecycle practices."
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
            institution: "Leeds Beckett University, United Kingdom",
            period: "2024",
            details: "Relevant study included Cloud Computing, Project Management, Agile Engineering, Database Systems and infrastructure-related technologies."
        },
        {
            degree: "Bachelor of Computer Applications",
            grade: "First Class",
            institution: "University of Calicut, India",
            period: "2022"
        }
    ],
    certifications: [
        {
            title: "Cisco Certified Network Associate (CCNA)",
            issuer: "Cisco",
            status: "In Progress",
            highlight: true,
            description: "Currently preparing for the CCNA examination, developing deeper knowledge across routing, switching, VLANs, subnetting, network services, infrastructure security and troubleshooting."
        },
        {
            title: "Microsoft Entra ID for Administrators",
            issuer: "Microsoft",
            year: "2026",
            status: "Completed"
        },
        {
            title: "DevOps Foundations",
            issuer: "LinkedIn Learning",
            year: "2025",
            status: "Completed"
        },
        {
            title: "DevOps Foundations: CI / CD",
            issuer: "LinkedIn Learning",
            year: "2025",
            status: "Completed"
        },
        {
            title: "DevOps Foundations: Infrastructure as Code",
            issuer: "LinkedIn Learning",
            year: "2025",
            status: "Completed"
        },
        {
            title: "ITOL / ITIL Fast Track Training",
            issuer: "Cerco Ltd",
            status: "Completed"
        },
        {
            title: "AWS Academy Graduate – Cloud Architecting",
            issuer: "Amazon Web Services",
            status: "Completed"
        },
        {
            title: "AWS Academy Graduate – Cloud Foundations",
            issuer: "Amazon Web Services",
            status: "Completed"
        },
        {
            title: "Ethical Hacking Workshop",
            issuer: "Robokart",
            status: "Completed"
        }
    ],
    targetTechnologies: ["Cisco (CCNA In Progress)", "Fortinet", "Cisco Meraki", "Juniper", "VLANs & Routing", "Network Migrations"],
    projects: [
        {
            title: "Multi-Site Network Refresh & Migration",
            category: "Networking",
            tech: ["Routers", "Managed Switches", "Wireless APs", "VLANs", "DHCP/DNS"],
            description: "Executed multi-site network infrastructure upgrades and migrations: hardware deployment, switch-port provisioning, port patching, live cutover execution, and post-installation reachability testing with zero operational disruption.",
            github: "https://github.com/R-Z-7",
            featured: true
        },
        {
            title: "Cisco CCNA Routing & Switching Lab",
            category: "Networking",
            tech: ["Cisco IOS", "Packet Tracer", "OSPF", "VLAN Trunking", "ACLs"],
            description: "Multi-device network topology featuring inter-VLAN routing, dynamic OSPF routing, DHCP relay/snooping, switch-port security, default gateways, NAT/PAT, and systematic fault isolation methodology.",
            github: "https://github.com/R-Z-7",
            featured: true
        },
        {
            title: "Enterprise Infrastructure & Monitoring Stack",
            category: "Infrastructure",
            tech: ["Windows Server", "Active Directory", "SNMP", "Syslog", "Prometheus"],
            description: "Centralised network device telemetry and identity management platform monitoring router/switch reachability, DHCP scope health, and Active Directory authentication with automated alert dispatching.",
            github: "https://github.com/R-Z-7",
            featured: true
        },
        {
            title: "Hardened Linux Gateway & Remote Access",
            category: "Systems",
            tech: ["Linux", "VPN / WireGuard", "SSH/SFTP", "SSL/TLS", "Firewalls"],
            description: "Administrative network bastion and secure gateway featuring encrypted site-to-site VPN tunnels, SFTP secure transfer, automated backup pipelines, and robust UFW/iptables traffic policies.",
            github: "https://github.com/R-Z-7",
            featured: false
        },
        {
            title: "Cloud & Automation IaC Repository",
            category: "Cloud",
            tech: ["AWS", "Azure", "Terraform", "PowerShell", "Git"],
            description: "Modular Infrastructure-as-Code blueprints deploying scalable virtual networks, subnets, routing tables, and security groups following enterprise cloud networking standards.",
            github: "https://github.com/R-Z-7",
            featured: false
        }
    ] as ProjectItem[]
};
