import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../../../../features/allUsers/usersSlice";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import DashBoardFooter from "../../../../footer/DashBoardFooter";
import ProspectusPDF from "../pdfs/ProspectusPDF";
import AdmissionPDF from "../pdfs/AdmissionPDF";
import StudentProfilePDF from "../pdfs/StudentProfilePDF";
import ProgrammesPDF from "../pdfs/ProgrammesPDF";
import UndertakingPDF from "../pdfs/UndertakingPDF";

export default function UndertakingPdfViewer({ enroledStudent }) {
  const userInfo = useSelector(getUser);
  const styles = StyleSheet.create({
    PDFContainer: {
      width: "100%",
      height: "82vh", //As per your page layout
    },
  });
  return (
    <div style={{ marginTop: "10rem" }}>
      <PDFViewer style={styles.PDFContainer} sh>
        <UndertakingPDF enroledStudent={enroledStudent} />
      </PDFViewer>
      <div className="footer">
        <DashBoardFooter />
      </div>
    </div>
  );
}