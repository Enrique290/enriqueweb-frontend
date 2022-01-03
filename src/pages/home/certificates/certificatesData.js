// Images
import ciscoLogo from "../../../assets/img/certificates/cisco.png";
import awsLogo from "../../../assets/img/certificates/aws.png";
import udemyLogo from "../../../assets/img/certificates/udemy.png";

// PDF
// Cisco
import ciscoPDF1 from "../../../assets/pdf/certificates/CCNAv7 Introduction to Networks.pdf";
import ciscoPDF2 from "../../../assets/pdf/certificates/CCNAv7 Switching, Routing, and Wireless Essentials.pdf";
import ciscoPDF3 from "../../../assets/pdf/certificates/CCNAv7 Enterprise Networking, Security, and Automation.pdf";
// AWS
import aswPDF from "../../../assets/pdf/certificates/AWS Cloud Practitioner Essentials.pdf";
// Udemy
import udemyPDF1 from "../../../assets/pdf/certificates/Web Personal MERN Full Stack MongoDB, Express, React y Node.pdf";

const groups = [
  {
    title: "Cisco",
    logo: ciscoLogo,
    certificates: [
      {
        title: "CCNAv7: Introduction to Networks",
        pdf: ciscoPDF1,
      },
      {
        title: "CCNAv7: Switching, Routing, and Wireless Essentials",
        pdf: ciscoPDF2,
      },
      {
        title: "CCNAv7: Enterprise Networking, Security, and Automation",
        pdf: ciscoPDF3,
      },
    ],
  },
  {
    title: "AWS",
    logo: awsLogo,
    certificates: [
      {
        title: "AWS Cloud Practitioner Essentials",
        pdf: aswPDF,
      },
    ],
  },
  {
    title: "Udemy",
    logo: udemyLogo,
    certificates: [
      {
        title: "Web Personal MERN Full Stack: MongoDB, Express, React y Node",
        pdf: udemyPDF1,
      },
    ],
  },
];

export default groups;
