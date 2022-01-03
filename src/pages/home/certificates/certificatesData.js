// Images
import ciscoLogo from "../../../assets/img/certificates/cisco.jpg";
import awsLogo from "../../../assets/img/certificates/aws.png";
import udemyLogo from "../../../assets/img/certificates/udemy.png";

// PDF
import ciscoPDF from "../../../assets/pdf/homePage/cuirriculumECC.pdf";

const groups = [
  {
    title: "Cisco",
    logo: ciscoLogo,
    certificates: [
      {
        title: "Cisco 1",
        pdf: ciscoPDF,
      },
      {
        title: "Cisco 2",
        pdf: ciscoPDF,
      },
      {
        title: "Cisco 3",
        pdf: ciscoPDF,
      },
    ],
  },
  {
    title: "AWS",
    logo: awsLogo,
    certificates: [
      {
        title: "Curso AWS",
        pdf: ciscoPDF,
      },
    ],
  },
  {
    title: "Udemy",
    logo: udemyLogo,
    certificates: [
      {
        title: "Curso udemy",
        pdf: ciscoPDF,
      },
    ],
  },
];

export default groups;
