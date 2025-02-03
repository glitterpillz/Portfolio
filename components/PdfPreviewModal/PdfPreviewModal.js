import { Document, Page } from "react-pdf";
import Modal from "@components/Modal";

function PdfPreviewModal({ isOpen, onClose, fileUrl }) {

  const handlePrint = () => {
    window.print();
  };

  const handleSave = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "file.pdf";
    link.click();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="pdf-preview-modal">
        <h2>PDF Preview</h2>
        <Document file={fileUrl}>
          <Page pageNumber={1} />
        </Document>

        <div className="pdf-controls">
          <button onClick={handlePrint}>Print</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </Modal>
  );
}

export default PdfPreviewModal;