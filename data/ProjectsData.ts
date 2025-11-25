// src/data/ProjectsData.ts

export interface Project {
  id: string;
  title: string;
  descriptionKey: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "LIMA-CHARLIE-EDR",
    title: "LIMA CHARLIE EDR",
    descriptionKey: "LIMA-CHARLIE-EDR",
    technologies: ["EDR","Lima-Charlie"],
    image: "/projects/lima-1.jpg",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    id: "INTEGRITY-FILE-MONITORING-USING-WAZUH",
    title: "INTEGRITY FILE MONITORING USING WAZUH",
    descriptionKey: "INTEGRITY-FILE-MONITORING-USING-WAZUH",
    technologies: ["SIEM", "File Integrity","Wazuh"],
    image: "/projects/wazuh-file-integrity-1.jpg",
    liveUrl: "https://medium.com/@h.anb/wazuh-fim-file-integrity-monitoring-on-windows-f460d758daa0",
    githubUrl: "https://github.com/heshammamdouh1997XX/Projects/blob/main/setup-Projects/Wazuh-Projects/File-Integrity-Monitoring.md",
    featured: true,
  },
  {
    id: "Soc-Security-Home-Lab",
    title: "Soc Security Home-Lab",
    descriptionKey: "Soc-Security-Home-Lab",
    technologies: ["SIEM","splunk"],
    image: "/projects/splunk-1.jpg",
    liveUrl: "https://medium.com/@h.anb/soc-security-home-lab-8f312ad52693",
    githubUrl: "",
    featured: true,
  },
  {
    id: "WAZUH-THEHIVE-AND-SHUFFLE",
    title: "WAZUH , THEHIVE AND SHUFFLE",
    descriptionKey: "WAZUH-THEHIVE-AND-SHUFFLE",
    technologies: [
      "Wazuh",
      "THEHIVE",
      "SHUFFLE",
      "SIEM",
      "SOAR"
    ],
    image: "/projects/wazuh-automation-3.png",
    liveUrl: "https://medium.com/@h.anb/project-part-1-setup-the-en-7920cb899325",
    githubUrl: "https://github.com/heshammamdouh1997XX/Projects/tree/main/setup-Projects/Wazuh-Projects/Wazuh-Automation",
    featured: false,
  },
  {
    id: "Setup-Vulnerability-Detection-using-Wazuh",
    title: "Setup Vulnerability Detection using Wazuh",
    descriptionKey: "Setup-Vulnerability-Detection-using-Wazuh",
    technologies: ["Vulnerability Detection", "Wazuh", "SIEM"],
    image: "/projects/wazuh-vulnerability-detection-1.1.jpg",
    liveUrl: "https://medium.com/@h.anb/setup-vulnerability-detection-using-wazuh-ad54adfbe518",
    githubUrl: "https://github.com/heshammamdouh1997XX/Projects/blob/main/setup-Projects/Wazuh-Projects/Vulnerability-Detection.md",
    featured: false,
  },
  {
    id: "Suricata-Wazuh",
    title: "Setup Suricata and integrate it with Wazuh",
    descriptionKey: "Suricata-Wazuh",
    technologies: ["IDs/IPs", "Wazuh", "SIEM","Suricata"],
    image: "/projects/Suricata.jpg",
    liveUrl: "https://github.com/heshammamdouh1997XX/Projects/tree/main/setup-Projects/Wazuh-Projects/Suricata-Integration",
    githubUrl: "https://github.com/heshammamdouh1997XX/Projects/tree/main/setup-Projects/Wazuh-Projects/Suricata-Integration",
    featured: false,
  },
];
