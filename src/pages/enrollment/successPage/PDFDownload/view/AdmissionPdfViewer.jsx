import React, { memo } from "react";
import { StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ProspectusPDF from "../pdfs/ProspectusPDF";
import AdmissionPDF from "../pdfs/AdmissionPDF";
import PropTypes from "prop-types";
import SmallFooter from "../../../../../components/footer/SmallFooter";
import { Box, Button } from "@mui/material";
import LoadingProgress from "../../../../../components/pageLoading/LoadingProgress";

export function AdmissionPdfViewer({
  enrolledStudent,
  currentTerm,
  currentAcademicYear,
}) {
  const styles = StyleSheet.create({
    PDFContainer: {
      width: "100%",
      height: "82vh", //As per your page layout
    },
  });
  // Wrap the PDFViewer component with React.memo
  const MemoizedPDFViewer = memo(
    ({ enrolledStudent, currentTerm, currentAcademicYear }) => {
      return (
        <PDFViewer style={styles.PDFContainer}>
          <AdmissionPDF
            enrolledStudent={enrolledStudent}
            currentTerm={currentTerm}
            currentAcademicYear={currentAcademicYear}
          />
        </PDFViewer>
      );
    },
    (prevProps, nextProps) =>
      prevProps.enrolledStudent === nextProps.enrolledStudent &&
      prevProps.currentTerm === nextProps.currentTerm &&
      prevProps.currentAcademicYear === nextProps.currentAcademicYear
  );
  // Set a display name for debugging
  MemoizedPDFViewer.displayName = "MemoizedPDFViewer";

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#292929",
          padding: "1rem 1rem 1rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <PDFDownloadLink
            style={{ display: "inline-block" }}
            document={
              <AdmissionPDF
                enrolledStudent={enrolledStudent}
                currentTerm={currentTerm}
                currentAcademicYear={currentAcademicYear}
              />
            }
            fileName="admission.pdf"
          >
            {({ loading }) =>
              loading ? (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "green",
                    letterSpacing: "1px",
                    minWidth: "9rem",
                    padding: ".5rem",
                  }}
                >
                  Loading ...
                  {/* <LoadingProgress color={"#fff"} size={"1.5rem"} /> */}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "green",
                    letterSpacing: "1px",
                    minWidth: "9rem",
                    padding: ".5rem",
                  }}
                >
                  Download PDF
                </Button>
              )
            }
          </PDFDownloadLink>
        </Box>
      </Box>
      <MemoizedPDFViewer
        enrolledStudent={enrolledStudent}
        currentTerm={currentTerm}
        currentAcademicYear={currentAcademicYear}
      />
      <SmallFooter />
    </Box>
  );
}

AdmissionPdfViewer.propTypes = {
  enrolledStudent: PropTypes.object,
  currentTerm: PropTypes.object,
  currentAcademicYear: PropTypes.object,
};
