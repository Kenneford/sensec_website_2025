import React from "react";
import "../scss/prospectusPdf.scss";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

export default function UndertakingPDF({ enrolledStudent }) {
  console.log(enrolledStudent);

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    letterBody: {
      marginTop: 35,
    },
    letterViews: {
      paddingTop: 16,
    },
    headerTitleWrap: {
      marginTop: 8,
    },
    headerTitle: {
      textAlign: "center",
      textDecoration: "underline",
      color: "#555",
      marginTop: 5,
    },
    textBox: {
      marginTop: 24,
      fontSize: 14,
      textAlign: "justify",
      //   fontFamily: "AntonFamily",
    },
    text: {
      marginVertical: 2,
      fontSize: 14,
      textAlign: "justify",
      color: "#696969",
      lineHeight: 1.5,
    },
    textSpan: {
      color: "#555",
    },
    textSpan1: {
      fontWeight: "extrabold",
      color: "#555",
    },
    textSpan2: {
      fontWeight: "extrabold",
      color: "#292929",
    },
    letterTitle: {
      marginVertical: 2,
      fontSize: 20,
      fontWeight: "extrabold",
      textAlign: "center",
      color: "#555",
      textDecoration: "underline",
    },
    date: {
      marginTop: 6,
      fontSize: 14,
      textAlign: "justify",
      color: "#292929",
    },
    image: {
      marginTop: -20,
      marginHorizontal: "auto",
      borderRadius: ".4rem",
      width: 40,
      height: 40,
      objectFit: "cover",
    },
    underTakingWrap: {
      marginTop: 20,
    },
    underTakingHeader: {
      marginTop: 10,
      marginBottom: 3,
      fontSize: 16,
      color: "#555",
      textDecoration: "underline",
    },
    h3: {
      fontSize: 16,
      color: "#696969",
      // paddingLeft: 16,
      marginTop: 5,
      marginBottom: 8,
      textDecoration: "underline",
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
      //   fontFamily: "AntonFamily",
    },
    list: {
      margin: 0,
      padding: 0,
    },
    listItem: {
      // marginBottom: 5,
      paddingLeft: 12,
      position: "relative",
    },
    listItemName: {
      // fontWeight: "bold",
      color: "#555",
      marginBottom: 0,
      letterSpacing: 1,
    },
    bullet: {
      position: "absolute",
      left: 10,
      top: 0,
      fontSize: 12,
      lineHeight: 1,
      marginTop: 2,
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
      //   fontFamily: "AntonFamily",
    },
  });
  const undertaking = `
    I, [Parent/Guardian Name], the parent/guardian of [Student Name], hereby pledge that my 
    child/ward will abide by all the rules and regulations of Senya Senior High School.

    I agree to ensure the following:
      1. My child/ward will attend school regularly and punctually.
      2. My child/ward will respect all school authorities, staff, and students.
      3. My child/ward will strictly adhere to the school’s dress code.
      4. My child/ward will participate in all academic and extracurricular activities.
    
    Should my child/ward breach any school rules, I understand that disciplinary measures may be taken.
    
    Signed: _____________________            Date: ________________
    Parent/Guardian Name: _________________________
  `;

  const medical_form = `
    Student Information:
      - Full Name: _____________________________
      - Date of Birth: _____________________________
    
    Medical History:
      - Allergies: ______________________________
      - Chronic Illnesses: _______________________
      - Immunization Record: _____________________
    
    Physical Examination:
      - Height: _____________   Weight: _____________
      - Blood Pressure: _____________
    
    Doctor’s Remarks:
    _____________________________________________________________________________________
    
    Doctor’s Name: _____________________________
    Signature: _______________________      Date: _____________
  `;

  return (
    <Document title="Undertaking_&_Medical_Status.pdf">
      <Page style={styles.body}>
        <Image style={styles.image} src={"/assets/sensec-logo1.png"} />
        <View style={styles.headerTitleWrap}>
          <Text style={styles.headerTitle}>SENYA SENIOR HIGH SCHOOL</Text>
          <Text style={styles.headerTitle}>UNDERTAKING AND MEDICAL STATUS</Text>
        </View>
        {/* <Image
          style={styles.image}
          src={enrolledStudent?.personalInfo?.profilePicture.url}
        /> */}
        <View style={styles.underTakingWrap}>
          <Text style={styles.underTakingHeader}>UNDERTAKING:</Text>
          <View style={styles.letterViews}>
            <Text style={styles.text}>
              I, _______________________, the parent/guardian of
              _______________________, hereby pledge that my child/ward will
              abide by all the rules and regulations of Senya Senior High
              School.
            </Text>
          </View>
          <View style={styles.letterViews}>
            <Text style={styles.listItemName}>
              I agree to ensure the following:
            </Text>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={[styles.text, styles.listItem]}>
                My child/ward will attend school regularly and punctually.
              </Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={[styles.text, styles.listItem]}>
                My child/ward will respect all school authorities, staff, and
                students.
              </Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={[styles.text, styles.listItem]}>
                My child/ward will strictly adhere to the school’s dress code.
              </Text>
            </View>
          </View>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>1.</Text>
              <Text style={[styles.text, styles.listItem]}>
                My child/ward will participate in all academic and
                extracurricular activities.
              </Text>
            </View>
          </View>
          <Text style={[styles.text, styles.textSpan1]}>
            Should my child/ward breach any school rules, I understand that
            disciplinary measures may be taken.
          </Text>
          <View style={styles.letterViews}>
            <Text style={[styles.text, styles.textSpan1]}>
              Signed: _______________________ Date: _______________________
            </Text>
          </View>
          <View style={styles.letterViews}>
            <Text style={[styles.text, styles.textSpan1]}>
              Parent/Guardian Name: _____________________________________
            </Text>
          </View>
        </View>
        <View style={styles.underTakingWrap}>
          <Text style={styles.underTakingHeader}>MEDICAL STATUS:</Text>
          <View style={styles.letterViews}>
            <Text style={styles.h3}>Student Information:</Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Full Name: _____________________________
            </Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Date of Birth: _____________________________
            </Text>
          </View>
          <View style={styles.letterViews}>
            <Text style={styles.h3}>Medical History:</Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Allergies: _____________________________
            </Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Chronic Illnesses: _____________________________
            </Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Immunization Record: _____________________________
            </Text>
          </View>
          <View style={styles.letterViews}>
            <Text style={styles.h3}>Physical Examination:</Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Height: _____________ <Text> </Text> Weight: _____________
            </Text>
            <Text style={[styles.text, styles.textSpan1]}>
              Blood Pressure: _____________
            </Text>
          </View>
          <View style={styles.letterViews}>
            <Text style={styles.h3}>Doctor’s Remarks:</Text>
            <Text style={[styles.text, styles.textSpan1]}>
              __________________________________________________________
              __________________________________________________________
              __________________________________________________________
              ____________________________________________________________________
            </Text>
          </View>
        </View>
        {/* <Text style={styles.text}>{medical_form}</Text> */}
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
}

UndertakingPDF.propTypes = {
  enrolledStudent: PropTypes.object,
};
