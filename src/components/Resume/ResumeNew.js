import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdfFile from "../../Assets/SaeedMujawarResume.pdf";

function ResumeNew() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'Saeed-Mujawar-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

    return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px"}}>
          <Button
            variant="primary"
            onClick={handleDownload}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>               
            <embed
              src={pdfFile}
              type="application/pdf"
              style={{
                width: '90vw',
                height: '90vh'
                
              }}                          
              title="Resume"
            ></embed>          
        </Row>

      </Container>
    </div>
  );
}

export default ResumeNew;
