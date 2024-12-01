import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import EditIcon from "@mui/icons-material/Edit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { dateFormatter } from "../dateFormatter/DateFormatter";
import { Box, Button } from "@mui/material";
import {
  approveStudentEnrollment,
  rejectStudentEnrollment,
} from "../features/students/studentsSlice";
import RejectionModal from "../components/modals/RejectionModal";
import {
  approveEmployee,
  rejectEmployee,
} from "../features/employments/employmentSlice";
import ApprovalModal from "../components/modals/ApprovalModal";
import { promoteStudent } from "../features/students/promotionSlice";
import PromotionsModal from "../components/modals/PromotionsModal";
import DemotionsModal from "../components/modals/DemotionsModal";
import { Close } from "@mui/icons-material";
import { removeClassSectionLecturer } from "../features/academics/classSectionSlice";

const adminsColumn = (authAdmin) => {
  const hangingAdminsColumn = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/Users/Admins/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${
              row?.uniqueId
            }/admin_info#studentInfo`}
            title="View Admin Info"
          >
            <img
              className="studentImg"
              src={
                row?.personalInfo
                  ? row?.personalInfo?.profilePicture?.url
                  : row?.personalInfo?.profilePicture
              }
              alt=""
            />
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Users/Admins/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}/admin_info#studentInfo`}
            title="View Admin Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Employed",
      selector: (row) =>
        !row?.employment?.createdAt
          ? "---"
          : dateFormatter?.format(
              new Date(row?.employment?.employmentApprovedDate)
            ),
    },
    {
      name: "Update",
      selector: (row) => (
        <>
          {row?.employment?.employmentStatus === "approved" && (
            <Link
              className="editLink"
              to={`/sensec/users/${authAdmin.uniqueId}/admin/Admins/${row.uniqueId}/admin_update`}
            >
              <EditIcon />
            </Link>
          )}
        </>
      ),
    },
  ];
  return hangingAdminsColumn;
};
const pendingAdminsColumn = (columnObjData) => {
  const pendingAdminsColumn = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/Users/Admins/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${
              row?.uniqueId
            }/admin_info#studentInfo`}
            title="View Admin Info"
          >
            <img
              className="studentImg"
              src={
                row?.personalInfo
                  ? row?.personalInfo?.profilePicture?.url
                  : row?.personalInfo?.profilePicture
              }
              alt=""
            />
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Users/Admins/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}/admin_info#studentInfo`}
            title="View Admin Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Processed",
      selector: (row) => (
        <p
          title={
            row?.employment
              ? dateFormatter.format(new Date(row?.employment?.createdAt))
              : "---"
          }
        >
          {row?.employment
            ? dateFormatter.format(new Date(row?.employment?.createdAt))
            : "---"}
        </p>
      ),
    },
    {
      name: "Update",
      selector: (row) => (
        <Link
          className="editLink"
          to={`/sensec/users/${columnObjData?.authAdmin.uniqueId}/admin/Admins/${row.uniqueId}/admin_update`}
        >
          <EditIcon />
        </Link>
      ),
    },
    {
      name: "Approve",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <>
            <HashLink
              className="approveLink"
              onClick={async () => {
                // Do not open modal if approval/rejection is in progress
                if (
                  !columnObjData?.rejectionInProgress &&
                  !columnObjData?.approvalInProgress
                ) {
                  columnObjData?.setCurrentAdmin(row?._id);
                  columnObjData?.setOpenApproveEmploymentModal(true);
                  columnObjData?.setOpenRejectModal(false);
                }
              }}
            >
              {columnObjData?.foundAdmin &&
                columnObjData?.foundAdmin._id === row._id && (
                  <>
                    {columnObjData?.loadingComplete === false && (
                      <Box
                        className="promotionSpinner"
                        sx={{
                          marginTop: ".7rem",
                        }}
                      >
                        <p>Processing</p>
                        {/* <CircularProgress style={{ color: "#555" }} size={"1.3em"} /> */}
                        <span className="dot-ellipsis">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </Box>
                    )}
                    {columnObjData?.loadingComplete &&
                      columnObjData?.approveEmploymentStatus === "success" && (
                        <>
                          <span>Approved</span> <TaskAltIcon />
                        </>
                      )}
                  </>
                )}
              <>
                {columnObjData?.loadingComplete === null && (
                  <HowToRegIcon
                    titleAccess="Approve Employment"
                    style={{ fontSize: "2rem" }}
                  />
                )}
                {row?._id !== columnObjData?.foundAdmin?._id &&
                  columnObjData?.loadingComplete !== null && (
                    <HowToRegIcon
                      titleAccess="Approve Employment"
                      style={{ fontSize: "2rem" }}
                    />
                  )}
              </>
            </HashLink>
            {columnObjData?.foundAdmin &&
              columnObjData?.foundAdmin._id === row._id && (
                <ApprovalModal
                  open={columnObjData?.openApproveEmploymentModal}
                  onClose={async () =>
                    columnObjData?.setOpenApproveEmploymentModal(false)
                  }
                  approvalFunction={approveEmployee({
                    employeeId: row?.uniqueId,
                    employmentApprovedBy: columnObjData?.authAdmin?.id,
                  })}
                  setLoadingComplete={columnObjData?.setLoadingComplete}
                  setSelectedUserToApprove={columnObjData?.setCurrentAdmin}
                  selectedUserToApproveId={row?._id}
                  userDataToApprove={columnObjData?.foundAdmin}
                  userDataToReject={columnObjData?.adminToReject}
                />
              )}
          </>
        ),
    },
    {
      name: "Reject",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <HashLink
            className="rejectLink"
            onClick={async () => {
              // Do not open modal if rejection/approval is in progress
              if (
                !columnObjData?.approvalInProgress &&
                !columnObjData?.rejectionInProgress
              ) {
                columnObjData?.setRejectAdmin(row._id);
                columnObjData?.setOpenRejectModal(true);
                columnObjData?.setOpenApproveEmploymentModal(false);
              }
            }}
          >
            {columnObjData?.rejectLoadingComplete === null && (
              <PersonRemoveIcon
                titleAccess="Reject Employment"
                style={{ fontSize: "2rem" }}
              />
            )}
            {row?._id !== columnObjData?.adminToReject?._id &&
              columnObjData?.rejectLoadingComplete !== null && (
                <PersonRemoveIcon
                  titleAccess="Reject Employment"
                  style={{ fontSize: "2rem" }}
                />
              )}
            {columnObjData?.adminToReject &&
              columnObjData?.adminToReject._id === row?._id && (
                <>
                  {columnObjData?.rejectLoadingComplete === false && (
                    <Box
                      className="promotionSpinner"
                      sx={{
                        marginTop: ".7rem",
                      }}
                    >
                      <p>Processing</p>
                      {/* <CircularProgress style={{ color: "#555" }} size={"1.3em"} /> */}
                      <span className="dot-ellipsis">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </span>
                    </Box>
                  )}
                  {columnObjData?.rejectLoadingComplete &&
                    columnObjData?.rejectEmploymentStatus === "success" && (
                      <>
                        <span>Rejected</span> <TaskAltIcon />
                      </>
                    )}
                  <RejectionModal
                    open={columnObjData?.openRejectModal}
                    onClose={() => columnObjData?.setOpenRejectModal(false)}
                    rejectionFunction={rejectEmployee({
                      employeeId: row?.uniqueId,
                      employmentRejectedBy: columnObjData?.authAdmin?.id,
                    })}
                    setLoadingComplete={columnObjData?.setRejectLoadingComplete}
                    setSelectedUserToReject={columnObjData?.setRejectAdmin}
                    selectedUserToRejectId={row?._id}
                    userDataToApprove={columnObjData?.foundAdmin}
                    userDataToReject={columnObjData?.adminToReject}
                  />
                </>
              )}
          </HashLink>
        ),
    },
  ];
  return pendingAdminsColumn;
};
const studentsColumn = (columnData) => {
  const studentColumn = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/${columnData?.adminCurrentAction}/${
              columnData?.adminCurrentLink
            }/${row?.personalInfo?.firstName?.replace(/ /g, "_")}_${
              row?.personalInfo?.lastName
            }/${row?.uniqueId}/student_info#studentInfo`}
            title="View Student Info"
          >
            <img
              className="studentImg"
              src={
                row?.personalInfo?.profilePicture?.url
                  ? row?.personalInfo?.profilePicture?.url
                  : row?.personalInfo?.profilePicture
              }
              alt=""
            />
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/${columnData?.adminCurrentAction}/${
              columnData?.adminCurrentLink
            }/${row?.personalInfo?.firstName?.replace(/ /g, "_")}_${
              row?.personalInfo?.lastName
            }/${row?.personalInfo?.uniqueId}/student_info#studentInfo`}
            title="View Student Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "Full Name",
      selector: (row) => row?.personalInfo?.fullName,
      sortable: true,
    },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Programme",
      selector: (row) =>
        row?.studentSchoolData ? row.studentSchoolData?.program?.name : "---",
    },
    {
      name: "Student-ID",
      selector: (row) => row?.uniqueId,
      sortable: true,
    },
    // {
    //   name: "Email",
    //   selector: (row) =>
    //     row?.contactAddress?.email ? row?.contactAddress?.email : "---",
    // },
    // {
    //   name: "Enrolled Date",
    //   selector: (row) =>
    //     dateFormatter.format(new Date(row?.studentStatusExtend?.dateEnrolled)),
    // },
    {
      name: "Batch",
      selector: (row) =>
        row.studentSchoolData?.batch?.yearRange
          ? `${row?.studentSchoolData?.batch?.yearRange.replace(/-/g, "/")}`
          : "---",
    },
    {
      name: "Level",
      selector: (row) =>
        row.studentSchoolData?.currentClassLevel && (
          <div className="tableClassLevel">
            {row.studentSchoolData?.currentClassLevel?.name === "Level 100" && (
              <div className="firstYearTag" title="1st Year">
                1
              </div>
            )}
            {row.studentSchoolData?.currentClassLevel?.name === "Level 200" && (
              <div className="secondYearTag" title="2nd Year">
                2
              </div>
            )}
            {row.studentSchoolData?.currentClassLevel?.name === "Level 300" &&
              !row.isGraduated && (
                <div className="thirdYearTag" title="3rd Year">
                  3
                </div>
              )}
            {row.isGraduated && (
              <div className="isGraduated" title="Graduated">
                <SchoolOutlinedIcon />
              </div>
            )}
          </div>
        ),
    },
    {
      name: "Promote",
      selector: (row) =>
        row?.studentSchoolData?.currentClassLevel && (
          <>
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 100" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  onClick={async () => {
                    // Do not open modal if approval/rejection is in progress
                    if (
                      !columnData?.demotionInProgress &&
                      !columnData?.promotionInProgress
                    ) {
                      columnData?.setCurrentStudent(row._id);
                      columnData?.setOpenPromotionModal(true);
                      columnData?.setOpenDemotionModal(false);
                    }
                  }}
                >
                  {columnData?.studentToPromote &&
                    columnData?.studentToPromote._id === row._id && (
                      <>
                        {columnData?.loadingComplete === false && (
                          <Box
                            className="promotionSpinner"
                            sx={{
                              marginTop: ".8rem",
                            }}
                          >
                            <span>Processing</span>
                            <span className="dot-ellipsis">
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                            </span>
                          </Box>
                        )}
                        {columnData?.loadingComplete &&
                          columnData?.promotionStatus === "success" && (
                            <>
                              <span>Promoted</span> <TaskAltIcon />
                            </>
                          )}
                      </>
                    )}
                  <>
                    {columnData?.loadingComplete === null && "P-L200"}
                    {row._id !== columnData?.studentToPromote?._id &&
                      columnData?.loadingComplete !== null &&
                      "P-L200"}
                  </>
                </HashLink>
                {columnData?.studentToPromote &&
                  columnData?.studentToPromote._id === row._id && (
                    <PromotionsModal
                      open={columnData?.openPromotionModal}
                      onClose={() => columnData?.setOpenPromotionModal(false)}
                      promotionFunction={promoteStudent({
                        studentId: row?.uniqueId,
                        lastPromotedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={columnData?.setLoadingComplete}
                      setSelectedUserToPromote={columnData?.setCurrentStudent}
                      selectedUserToPromoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 200" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  onClick={async () => {
                    // Do not open modal if approval/rejection is in progress
                    if (
                      !columnData?.demotionInProgress &&
                      !columnData?.promotionInProgress
                    ) {
                      columnData?.setCurrentStudent(row._id);
                      columnData?.setOpenPromotionModal(true);
                      columnData?.setOpenDemotionModal(false);
                    }
                  }}
                >
                  {columnData?.studentToPromote &&
                    columnData?.studentToPromote._id === row._id && (
                      <>
                        {columnData?.loadingComplete === false && (
                          <Box
                            className="promotionSpinner"
                            sx={{
                              marginTop: ".8rem",
                            }}
                          >
                            <span>Processing</span>
                            <span className="dot-ellipsis">
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                            </span>
                          </Box>
                        )}
                        {columnData?.loadingComplete &&
                          columnData?.promotionStatus === "success" && (
                            <>
                              <span>Promoted</span> <TaskAltIcon />
                            </>
                          )}
                      </>
                    )}
                  <>
                    {columnData?.loadingComplete === null && "P-L300"}
                    {row._id !== columnData?.studentToPromote?._id &&
                      columnData?.loadingComplete !== null &&
                      "P-L300"}
                  </>
                </HashLink>
                {columnData?.studentToPromote &&
                  columnData?.studentToPromote._id === row._id && (
                    <PromotionsModal
                      open={columnData?.openPromotionModal}
                      onClose={() => columnData?.setOpenPromotionModal(false)}
                      promotionFunction={promoteStudent({
                        studentId: row?.uniqueId,
                        lastPromotedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={columnData?.setLoadingComplete}
                      setSelectedUserToPromote={columnData?.setCurrentStudent}
                      selectedUserToPromoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 300" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  onClick={async () => {
                    // Do not open modal if approval/rejection is in progress
                    if (
                      !columnData?.demotionInProgress &&
                      !columnData?.promotionInProgress
                    ) {
                      columnData?.setCurrentStudent(row._id);
                      columnData?.setOpenPromotionModal(true);
                      columnData?.setOpenDemotionModal(false);
                    }
                  }}
                >
                  {columnData?.studentToPromote &&
                    columnData?.studentToPromote._id === row._id && (
                      <>
                        {columnData?.loadingComplete === false && (
                          <Box
                            className="promotionSpinner"
                            sx={{
                              marginTop: ".8rem",
                            }}
                          >
                            <span>Processing</span>
                            <span className="dot-ellipsis">
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                            </span>
                          </Box>
                        )}
                        {columnData?.loadingComplete &&
                          columnData?.promotionStatus === "success" && (
                            <>
                              <span>Promoted</span> <TaskAltIcon />
                            </>
                          )}
                      </>
                    )}
                  <>
                    {columnData?.loadingComplete === null && "Graduate"}
                    {row._id !== columnData?.studentToPromote?._id &&
                      columnData?.loadingComplete !== null &&
                      "Graduate"}
                  </>
                </HashLink>
                {columnData?.studentToPromote &&
                  columnData?.studentToPromote._id === row._id && (
                    <PromotionsModal
                      open={columnData?.openPromotionModal}
                      onClose={() => columnData?.setOpenPromotionModal(false)}
                      promotionFunction={promoteStudent({
                        studentId: row?.uniqueId,
                        lastPromotedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={columnData?.setLoadingComplete}
                      setSelectedUserToPromote={columnData?.setCurrentStudent}
                      selectedUserToPromoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
          </>
        ),
    },
    {
      name: "Demote",
      selector: (row) =>
        row?.studentSchoolData?.currentClassLevel && (
          <>
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 100" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  style={{ color: "#696969" }}
                >
                  {columnData?.demotionLoadingComplete === null &&
                    row?.studentSchoolData?.currentClassLevel?.name ===
                      "Level 100" &&
                    "---"}
                  {row._id !== columnData?.studentToDemote?._id &&
                    columnData?.demotionLoadingComplete !== null &&
                    row?.studentSchoolData?.currentClassLevel?.name ===
                      "Level 100" &&
                    "---"}
                </HashLink>
                {columnData?.studentToDemote &&
                  columnData?.studentToDemote._id === row._id && (
                    <DemotionsModal
                      open={columnData?.openDemotionModal}
                      onClose={() => columnData?.setOpenDemotionModal(false)}
                      promotionFunction={approveStudentEnrollment({
                        studentId: row?.uniqueId,
                        enrollmentApprovedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={
                        columnData?.setDemotionLoadingComplete
                      }
                      setSelectedUserToDemote={columnData?.setDemoteStudent}
                      selectedUserToDemoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 200" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  onClick={async () => {
                    // Do not open modal if approval/rejection is in progress
                    if (
                      !columnData?.demotionInProgress &&
                      !columnData?.promotionInProgress
                    ) {
                      columnData?.setDemoteStudent(row._id);
                      columnData?.setOpenDemotionModal(true);
                      columnData?.setOpenPromotionModal(false);
                    }
                  }}
                  style={{ color: "#696969" }}
                >
                  {columnData?.studentToDemote &&
                    columnData?.studentToDemote._id === row._id && (
                      <>
                        {columnData?.demotionLoadingComplete === false && (
                          <Box
                            className="promotionSpinner"
                            sx={{
                              marginTop: ".8rem",
                              color: "red",
                            }}
                          >
                            <span>Processing</span>
                            <span className="dot-ellipsis">
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                            </span>
                          </Box>
                        )}
                        {columnData?.demotionLoadingComplete &&
                          columnData?.promotionStatus === "success" && (
                            <>
                              <span>Demoted</span> <TaskAltIcon />
                            </>
                          )}
                      </>
                    )}
                  <>
                    {columnData?.demotionLoadingComplete === null &&
                      row?.studentSchoolData?.currentClassLevel?.name ===
                        "Level 200" &&
                      "D-L100"}
                    {row._id !== columnData?.studentToDemote?._id &&
                      columnData?.demotionLoadingComplete !== null &&
                      row?.studentSchoolData?.currentClassLevel?.name ===
                        "Level 200" &&
                      "D-L100"}
                  </>
                </HashLink>
                {columnData?.studentToDemote &&
                  columnData?.studentToDemote._id === row._id && (
                    <DemotionsModal
                      open={columnData?.openDemotionModal}
                      onClose={() => columnData?.setOpenDemotionModal(false)}
                      promotionFunction={approveStudentEnrollment({
                        studentId: row?.uniqueId,
                        enrollmentApprovedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={
                        columnData?.setDemotionLoadingComplete
                      }
                      setSelectedUserToDemote={columnData?.setDemoteStudent}
                      selectedUserToDemoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
            {row?.studentSchoolData?.currentClassLevel?.name ===
              "Level 300" && (
              <>
                <HashLink
                  to={"#"}
                  className="approveLink"
                  onClick={async () => {
                    // Do not open modal if approval/rejection is in progress
                    if (
                      !columnData?.demotionInProgress &&
                      !columnData?.promotionInProgress
                    ) {
                      columnData?.setDemoteStudent(row._id);
                      columnData?.setOpenDemotionModal(true);
                      columnData?.setOpenPromotionModal(false);
                    }
                  }}
                  style={{ color: "#696969" }}
                >
                  {columnData?.studentToDemote &&
                    columnData?.studentToDemote._id === row._id && (
                      <>
                        {columnData?.demotionLoadingComplete === false && (
                          <Box
                            className="promotionSpinner"
                            sx={{
                              marginTop: ".8rem",
                              color: "red",
                            }}
                          >
                            <span>Processing</span>
                            <span className="dot-ellipsis">
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                              <span className="dot">.</span>
                            </span>
                          </Box>
                        )}
                        {columnData?.demotionLoadingComplete &&
                          columnData?.promotionStatus === "success" && (
                            <>
                              <span>Demoted</span> <TaskAltIcon />
                            </>
                          )}
                      </>
                    )}
                  <>
                    {columnData?.demotionLoadingComplete === null &&
                      row?.studentSchoolData?.currentClassLevel?.name ===
                        "Level 300" &&
                      "D-L200"}
                    {row._id !== columnData?.studentToDemote?._id &&
                      columnData?.demotionLoadingComplete !== null &&
                      row?.studentSchoolData?.currentClassLevel?.name ===
                        "Level 300" &&
                      "D-L200"}
                  </>
                </HashLink>
                {columnData?.studentToDemote &&
                  columnData?.studentToDemote._id === row._id && (
                    <DemotionsModal
                      open={columnData?.openDemotionModal}
                      onClose={() => columnData?.setOpenDemotionModal(false)}
                      promotionFunction={approveStudentEnrollment({
                        studentId: row?.uniqueId,
                        enrollmentApprovedBy: `${columnData?.authAdmin?.id}`,
                      })}
                      setLoadingComplete={
                        columnData?.setDemotionLoadingComplete
                      }
                      setSelectedUserToDemote={columnData?.setDemoteStudent}
                      selectedUserToDemoteId={row?._id}
                      userDataToPromote={columnData?.studentToPromote}
                      userDataToDemote={columnData?.studentToDemote}
                    />
                  )}
              </>
            )}
          </>
        ),
    },
    {
      name: "Update",
      selector: (row) => (
        <Link
          className="editLink"
          to={`/sensec/users/${columnData?.authAdmin?.uniqueId}/admin/Students/${row.uniqueId}/student_update`}
        >
          <EditIcon />
        </Link>
      ),
    },
  ];
  return studentColumn;
};
const pendingStudentsColumn = (columnData) => {
  const pendingStudentsColumn = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/${columnData?.adminCurrentAction}/${
              columnData?.adminCurrentLink
            }/${row?.personalInfo?.firstName?.replace(/ /g, "_")}_${
              row?.personalInfo?.lastName
            }/${row?.uniqueId}/student_info#studentInfo`}
            title="View Student Info"
          >
            <img
              className="studentImg"
              src={
                row?.personalInfo
                  ? row?.personalInfo?.profilePicture?.url
                  : row?.personalInfo?.profilePicture
              }
              alt=""
            />
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
            title="View Student Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "Full Name",
      selector: (row) => row?.personalInfo?.fullName,
      sortable: true,
    },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return <p>---</p>;
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Program",
      selector: (row) =>
        row?.studentSchoolData ? row.studentSchoolData?.program?.name : "---",
    },
    {
      name: "Unique-ID",
      selector: (row) => (row?.uniqueId ? row?.uniqueId : "---"),
      sortable: true,
    },
    // {
    //   name: "Email",
    //   selector: (row) =>
    //     row?.contactAddress?.email ? row?.contactAddress?.email : "---",
    // },
    // {
    //   name: "Date Enrolled",
    //   selector: (row) =>
    //     !row?.studentStatusExtend?.dateEnrolled
    //       ? "---"
    //       : dateFormatter?.format(
    //           new Date(row?.studentStatusExtend?.dateEnrolled)
    //         ),
    // },
    {
      name: "Batch",
      selector: (row) =>
        row.studentSchoolData?.batch?.yearRange
          ? `${row?.studentSchoolData?.batch?.yearRange.replace(/-/g, "/")}`
          : "---",
    },
    {
      name: "Level",
      selector: (row) =>
        row.studentSchoolData?.currentClassLevel && (
          <div className="tableClassLevel">
            {row.studentSchoolData?.currentClassLevel?.name === "Level 100" && (
              <div className="firstYearTag" title="1st Year">
                1
              </div>
            )}
            {row.studentSchoolData?.currentClassLevel?.name === "Level 200" && (
              <div className="secondYearTag" title="2nd Year">
                2
              </div>
            )}
            {row.studentSchoolData?.currentClassLevel?.name === "Level 300" &&
              !row.isGraduated && (
                <div className="thirdYearTag" title="3rd Year">
                  3
                </div>
              )}
            {row.isGraduated && (
              <div className="isGraduated" title="Graduated">
                <SchoolOutlinedIcon />
              </div>
            )}
          </div>
        ),
    },
    {
      name: "Approve",
      selector: (row) =>
        row?.studentStatusExtend?.enrollmentStatus === "pending" && (
          <>
            <HashLink
              to={"#"}
              className="approveLink"
              onClick={async () => {
                // Do not open modal if approval/rejection is in progress
                if (
                  !columnData?.rejectionInProgress &&
                  !columnData?.approvalInProgress
                ) {
                  columnData?.setCurrentStudent(row._id);
                  columnData?.setOpenApproveEnrollmentModal(true);
                  columnData?.setOpenRejectModal(false);
                }
              }}
            >
              {columnData?.foundStudent &&
                columnData?.foundStudent._id === row._id && (
                  <>
                    {columnData?.loadingComplete === false && (
                      <Box
                        className="promotionSpinner"
                        sx={{
                          marginTop: ".8rem",
                        }}
                      >
                        <span>Processing</span>
                        <span className="dot-ellipsis">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </Box>
                    )}
                    {columnData?.loadingComplete &&
                      columnData?.enrollmentApprovalStatus === "success" && (
                        <>
                          <span>Approved</span> <TaskAltIcon />
                        </>
                      )}
                  </>
                )}
              <>
                {columnData?.loadingComplete === null && (
                  <HowToRegIcon
                    titleAccess="Approve Enrollment"
                    style={{ fontSize: "2rem" }}
                  />
                )}
                {row?._id !== columnData?.foundStudent?._id &&
                  columnData?.loadingComplete !== null && (
                    <HowToRegIcon
                      titleAccess="Approve Enrollment"
                      style={{ fontSize: "2rem" }}
                    />
                  )}
              </>
            </HashLink>
            {columnData?.foundStudent &&
              columnData?.foundStudent._id === row._id && (
                <ApprovalModal
                  open={columnData?.openApproveEnrollmentModal}
                  onClose={() =>
                    columnData?.setOpenApproveEnrollmentModal(false)
                  }
                  approvalFunction={approveStudentEnrollment({
                    studentId: row?.uniqueId,
                    enrollmentApprovedBy: `${columnData?.authAdmin?.id}`,
                  })}
                  setLoadingComplete={columnData?.setLoadingComplete}
                  setSelectedUserToApprove={columnData?.setCurrentStudent}
                  selectedUserToApproveId={row?._id}
                  userDataToApprove={columnData?.foundStudent}
                  userDataToReject={columnData?.studentToReject}
                />
              )}
          </>
        ),
    },
    {
      name: "Reject",
      selector: (row) =>
        row?.studentStatusExtend?.enrollmentStatus === "pending" && (
          <HashLink
            to={"#"}
            className="rejectLink"
            onClick={async () => {
              // Do not open modal if rejection/approval is in progress
              if (
                !columnData?.approvalInProgress &&
                !columnData?.rejectionInProgress
              ) {
                columnData?.setRejectStudent(row._id);
                columnData?.setOpenRejectModal(true);
                columnData?.setOpenApproveEnrollmentModal(false);
              }
            }}
          >
            {columnData?.rejectLoadingComplete === null && (
              <PersonRemoveIcon
                titleAccess="Reject Employment"
                style={{ fontSize: "2rem" }}
              />
            )}
            {row?._id !== columnData?.studentToReject?._id &&
              columnData?.rejectLoadingComplete !== null && (
                <PersonRemoveIcon
                  titleAccess="Reject Employment"
                  style={{ fontSize: "2rem" }}
                />
              )}
            {columnData?.studentToReject &&
              columnData?.studentToReject._id === row._id && (
                <>
                  {columnData?.rejectLoadingComplete === false && (
                    <Box
                      className="promotionSpinner"
                      sx={{
                        marginTop: ".8rem",
                      }}
                    >
                      <span>Processing</span>
                      <span className="dot-ellipsis">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </span>
                    </Box>
                  )}
                  {columnData?.rejectLoadingComplete &&
                    columnData?.rejectEnrollmentStatus === "success" && (
                      <>
                        <span>Rejected</span> <TaskAltIcon />
                      </>
                    )}
                  <RejectionModal
                    open={columnData?.openRejectModal}
                    onClose={() => columnData?.setOpenRejectModal(false)}
                    rejectionFunction={rejectStudentEnrollment({
                      studentId: row?.uniqueId,
                      enrollmentRejectedBy: `${columnData?.authAdmin?.id}`,
                    })}
                    setLoadingComplete={columnData?.setRejectLoadingComplete}
                    setSelectedUserToReject={columnData?.setRejectStudent}
                    selectedUserToRejectId={row?._id}
                    userDataToApprove={columnData?.foundStudent}
                    userDataToReject={columnData?.studentToReject}
                  />
                </>
              )}
          </HashLink>
        ),
    },
    {
      name: "Update",
      selector: (row) => (
        <Link
          className="editLink"
          to={`/sensec/users/${columnData?.authAdmin?.uniqueId}/admin/Students/${row?.uniqueId}/student_update`}
        >
          <EditIcon />
        </Link>
      ),
    },
  ];
  return pendingStudentsColumn;
};
// const courseMatesColumn = () => {
//   const studentColumn = [
//     {
//       name: "Image",
//       selector: (row) =>
//         row?.personalInfo?.profilePicture ? (
//           <HashLink
//             // scroll={scrollWithOffset}
//             // smooth
//             to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName.replace(
//               / /g,
//               "_"
//             )}_${row?.personalInfo?.lastName}/${row?.uniqueId}#studentInfo`}
//             title="View Student Info"
//           >
//             <img
//               className="studentImg"
//               src={
//                 row?.personalInfo?.profilePicture?.url
//                   ? row?.personalInfo?.profilePicture?.url
//                   : row?.personalInfo?.profilePicture
//               }
//               alt=""
//             />
//           </HashLink>
//         ) : (
//           <HashLink
//             // scroll={scrollWithOffset}
//             // smooth
//             className="noImgLink"
//             to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
//             title="View Student Info"
//           >
//             {row?.personalInfo?.gender === "Male" && (
//               <img
//                 className="studentImg"
//                 src={"/assets/maleAvatar.png"}
//                 alt=""
//               />
//             )}
//             {row?.personalInfo?.gender === "Female" && (
//               <img
//                 className="studentImg"
//                 src={"/assets/femaleAvatar.png"}
//                 alt=""
//               />
//             )}
//             {row?.personalInfo?.gender === "" && (
//               <div className="noImg">
//                 <p>No</p>
//                 <p>Image</p>
//               </div>
//             )}
//           </HashLink>
//         ),
//     },
//     {
//       name: "First Name",
//       selector: (row) => row?.personalInfo?.firstName,
//       sortable: true,
//     },
//     { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
//     // {
//     //   name: "Date Of Birth",
//     //   selector: (row) =>
//     //     row?.personalInfo?.dateOfBirth
//     //       ? dateFormatter.format(new Date(row?.personalInfo?.dateOfBirth))
//     //       : "---",
//     // },
//     {
//       name: "Program",
//       selector: (row) =>
//         row?.studentSchoolData?.program
//           ? row.studentSchoolData?.program.name
//           : "---",
//     },
//     {
//       name: "Student-ID",
//       selector: (row) => row?.uniqueId,
//       sortable: true,
//     },
//     {
//       name: "Email",
//       selector: (row) =>
//         row?.contactAddress?.email ? row?.contactAddress?.email : "---",
//     },
//     {
//       name: "Enrolled Date",
//       selector: (row) =>
//         row?.studentStatusExtend?.dateEnrolled
//           ? dateFormatter.format(
//               new Date(row?.studentStatusExtend?.dateEnrolled)
//             )
//           : "---",
//     },
//     {
//       name: "Batch",
//       selector: (row) =>
//         row.studentSchoolData?.batch?.yearRange
//           ? `${row?.studentSchoolData?.batch?.yearRange.replace(/-/g, "/")}`
//           : "---",
//     },
//   ];
//   return studentColumn;
// };
const teachersColumn = (columnData) => {
  const teachersDataFormat = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/Users/Lecturers/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${
              row?.uniqueId
            }/lecturer_info#teacherInfo`}
            title="View Lecturer Info"
          >
            {!row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture}
                alt=""
              />
            )}
            {row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture?.url}
                alt=""
              />
            )}
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
            title="View Lecturer Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Class Handling",
      selector: (row) => (
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <p
            style={{
              position: "relative",
              textAlign: "center",
            }}
            title={
              row?.lecturerSchoolData?.classLevelHandling
                ? `${row?.lecturerSchoolData?.classLevelHandling?.sectionName}-${row?.lecturerSchoolData?.classLevelHandling?.classLevelName}`
                : ""
            }
          >
            {row?.lecturerSchoolData?.classLevelHandling ? (
              row?.lecturerSchoolData?.classLevelHandling?.label
            ) : (
              <Button
                variant="text"
                sx={{
                  color: "green",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  backgroundColor: "transparent",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (!columnData?.redirect) {
                    columnData?.setLecturerToAssign(row?.uniqueId);
                    columnData?.setRedirect(true);
                    localStorage?.setItem("lecturerId", row?.uniqueId);
                    setTimeout(() => {
                      columnData?.navigate(
                        `/sensec/users/${columnData?.authAdmin?.uniqueId}/admin/User_Types/Lecturers/employees/assign_class`
                      );
                    }, 3000);
                  }
                }}
              >
                {!columnData?.redirect &&
                  !columnData?.lecturerToAssign &&
                  "Assign Class"}
                {columnData?.redirect &&
                  columnData?.lecturerToAssign !== row?.uniqueId &&
                  "Assign Class"}
                {columnData?.redirect &&
                  columnData?.lecturerToAssign === row?.uniqueId && (
                    <Box
                      className="promotionSpinner"
                      sx={
                        {
                          // marginTop: ".5rem",
                        }
                      }
                    >
                      <p>Processing</p>
                      <span className="dot-ellipsis">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </span>
                    </Box>
                  )}
              </Button>
            )}
          </p>
          {row?.lecturerSchoolData?.classLevelHandling && (
            <>
              {row?.lecturerSchoolData?.classLevelHandling &&
                columnData?.removingLecturer === null && (
                  <Close
                    titleAccess={
                      row?.lecturerSchoolData?.classLevelHandling
                        ? "Unassign Lecturer"
                        : ""
                    }
                    className="removeClassLecturerIcon"
                    onClick={(e) => {
                      e.preventDefault();
                      columnData?.setRemovingLecturer(false);
                      columnData?.dispatch(
                        removeClassSectionLecturer({
                          data: {
                            lecturerId: row?.uniqueId,
                            classSectionId:
                              row?.lecturerSchoolData?.classLevelHandling?._id,
                            previousLecturerRemovedBy:
                              columnData?.authAdmin?.id,
                          },
                        })
                      );
                    }}
                    sx={{
                      backgroundColor: "red",
                      color: "#fff",
                      borderRadius: "50%",
                      fontSize: "1rem",
                      margin: "unset",
                      "&-hover": { cursor: "pointer" },
                    }}
                  />
                )}
              {columnData?.removingLecturer === false && (
                <Box className="promotionSpinner">
                  <span className="dot-ellipsis" style={{ color: "red" }}>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </span>
                </Box>
              )}
              {columnData?.removingLecturer === true &&
                columnData?.removeLecturerStatus === "success" && (
                  <Box className="promotionSpinner">
                    <TaskAltIcon sx={{ color: "green" }} />
                  </Box>
                )}
            </>
          )}
        </Box>
      ),
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Employed",
      selector: (row) =>
        row?.employment?.employmentApprovedDate
          ? dateFormatter.format(
              new Date(row?.employment.employmentApprovedDate)
            )
          : "---",
    },
    {
      name: "Class Levels",
      selector: (row) =>
        row?.teacherSchoolData?.classLevels
          ? row?.teacherSchoolData?.classLevels?.length
          : "---",
    },
    {
      name: "Update",
      selector: (row) => (
        <Link
          className="editLink"
          to={`/sensec/users/${columnData?.authAdmin.uniqueId}/admin/Lecturers/${row.uniqueId}/lecturer_update`}
        >
          <EditIcon />
        </Link>
      ),
    },
  ];
  return teachersDataFormat;
};
const pendingTeachersColumn = (columnObjData) => {
  const teachersDataFormat = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/Users/Lecturers/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${
              row?.uniqueId
            }/lecturer_info#teacherInfo`}
            title="View Lecturer Info"
          >
            {!row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture}
                alt=""
              />
            )}
            {row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture?.url}
                alt=""
              />
            )}
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
            title="View Lecturer Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Processed",
      selector: (row) => (
        <p
          title={
            row?.employment
              ? dateFormatter.format(new Date(row?.employment?.createdAt))
              : "---"
          }
        >
          {row?.employment
            ? dateFormatter.format(new Date(row?.employment?.createdAt))
            : "---"}
        </p>
      ),
    },
    {
      name: "Update",
      selector: (row) => (
        <>
          {row?.employment?.employmentStatus === "pending" && (
            <Link
              className="editLink"
              to={`/sensec/users/${columnObjData?.authAdmin.uniqueId}/admin/Lecturers/${row.uniqueId}/lecturer_update`}
            >
              <EditIcon />
            </Link>
          )}
        </>
      ),
    },
    {
      name: "Approve",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <>
            <HashLink
              className="approveLink"
              onClick={async () => {
                columnObjData?.setCurrentLecturer(row._id);
                columnObjData?.setOpenApproveEmploymentModal(true);
                columnObjData?.setOpenRejectModal(false);
              }}
            >
              {columnObjData?.foundLecturer &&
                columnObjData?.foundLecturer._id === row._id && (
                  <>
                    {columnObjData?.loadingComplete === false && (
                      <Box
                        className="promotionSpinner"
                        sx={{
                          marginTop: ".5rem",
                        }}
                      >
                        <p>Processing</p>
                        <span className="dot-ellipsis">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </Box>
                    )}
                    {columnObjData?.loadingComplete &&
                      columnObjData?.approveEmploymentStatus === "success" && (
                        <>
                          <span>Approved</span> <TaskAltIcon />
                        </>
                      )}
                  </>
                )}
              <>
                {columnObjData?.loadingComplete === null && (
                  <HowToRegIcon
                    titleAccess="Approve Employment"
                    style={{ fontSize: "2rem" }}
                  />
                )}
                {row?._id !== columnObjData?.foundLecturer?._id &&
                  columnObjData?.loadingComplete !== null && (
                    <HowToRegIcon
                      titleAccess="Approve Employment"
                      style={{ fontSize: "2rem" }}
                    />
                  )}
              </>
            </HashLink>
            {columnObjData?.foundLecturer &&
              columnObjData?.foundLecturer?._id === row?._id && (
                <ApprovalModal
                  open={columnObjData?.openApproveEmploymentModal}
                  onClose={() =>
                    columnObjData?.setOpenApproveEmploymentModal(false)
                  }
                  approvalFunction={approveEmployee({
                    employeeId: row?.uniqueId,
                    employmentApprovedBy: columnObjData?.authAdmin?.id,
                  })}
                  setLoadingComplete={columnObjData?.setLoadingComplete}
                  setSelectedUserToApprove={columnObjData?.setCurrentLecturer}
                  selectedUserToApproveId={row?._id}
                  userDataToApprove={columnObjData?.foundLecturer}
                  userDataToReject={columnObjData?.lecturerToReject}
                />
              )}
          </>
        ),
    },
    {
      name: "Reject",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <HashLink
            className="rejectLink"
            onClick={async () => {
              columnObjData?.setRejectLecturer(row?._id);
              columnObjData?.setOpenRejectModal(true);
              columnObjData?.setOpenApproveEmploymentModal(false);
            }}
          >
            {columnObjData?.rejectLoadingComplete === null && (
              <PersonRemoveIcon
                titleAccess="Reject Employment"
                style={{ fontSize: "2rem" }}
              />
            )}
            {row?._id !== columnObjData?.lecturerToReject?._id &&
              columnObjData?.rejectLoadingComplete !== null && (
                <PersonRemoveIcon
                  titleAccess="Reject Employment"
                  style={{ fontSize: "2rem" }}
                />
              )}
            {columnObjData?.lecturerToReject &&
              columnObjData?.lecturerToReject?._id === row._id && (
                <>
                  {columnObjData?.rejectLoadingComplete === false && (
                    <Box
                      className="promotionSpinner"
                      sx={{
                        marginTop: ".5rem",
                      }}
                    >
                      <p>Processing</p>
                      <span className="dot-ellipsis">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </span>
                    </Box>
                  )}
                  {columnObjData?.rejectLoadingComplete &&
                    columnObjData?.rejectEmploymentStatus === "success" && (
                      <>
                        <span>Rejected</span> <TaskAltIcon />
                      </>
                    )}
                  <RejectionModal
                    open={columnObjData?.openRejectModal}
                    onClose={async () =>
                      columnObjData?.setOpenRejectModal(false)
                    }
                    rejectionFunction={rejectEmployee({
                      employeeId: row?.uniqueId,
                      employmentRejectedBy: columnObjData?.authAdmin?.id,
                    })}
                    setLoadingComplete={columnObjData?.setRejectLoadingComplete}
                    setSelectedUserToReject={columnObjData?.setRejectLecturer}
                    selectedUserToRejectId={row?._id}
                    userDataToApprove={columnObjData?.foundLecturer}
                    userDataToReject={columnObjData?.lecturerToReject}
                  />
                </>
              )}
          </HashLink>
        ),
    },
  ];
  return teachersDataFormat;
};
const nTStaffsColumn = (adminCurrentLink, authAdmin) => {
  const nTStaffsDataFormat = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/${
              authAdmin?.uniqueId
            }/Users/${adminCurrentLink}/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${row?.uniqueId}/nt_staff_info`}
            title="View NT-Staff Info"
          >
            {!row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture}
                alt=""
              />
            )}
            {row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture?.url}
                alt=""
              />
            )}
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
            title="View Lecturer Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Employed",
      selector: (row) =>
        row?.employment?.employmentApprovedDate
          ? dateFormatter.format(
              new Date(row?.employment.employmentApprovedDate)
            )
          : "---",
    },
    {
      name: "Update",
      selector: (row) => (
        <Link
          className="editLink"
          to={`/sensec/users/${authAdmin?.uniqueId}/admin/NT-Staff/${row?.uniqueId}/nt-staff_update`}
        >
          <EditIcon />
        </Link>
      ),
    },
  ];
  return nTStaffsDataFormat;
};
const pendingNTStaffsColumn = (columnObjData) => {
  const nTStaffsDataFormat = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/Users/Lecturers/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${
              row?.uniqueId
            }/lecturer_info#teacherInfo`}
            title="View Student Info"
          >
            {!row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture}
                alt=""
              />
            )}
            {row?.personalInfo?.profilePicture?.url && (
              <img
                className="studentImg"
                src={row?.personalInfo?.profilePicture?.url}
                alt=""
              />
            )}
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/Students/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}#studentInfo`}
            title="View Lecturer Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) => {
        if (!row?.personalInfo?.dateOfBirth) return "---";
        const date = new Date(row?.personalInfo?.dateOfBirth);
        // Adjust for timezones explicitly if needed
        const utcDate = new Date(
          date.getTime() + date.getTimezoneOffset() * 60000
        );
        return (
          <p title={dateFormatter.format(utcDate)}>
            {dateFormatter.format(utcDate)}
          </p>
        );
      },
    },
    {
      name: "Unique-ID",
      selector: (row) => <p title={row?.uniqueId}>{row?.uniqueId}</p>,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <p title={row?.contactAddress?.email}>
          {row?.contactAddress?.email ? row?.contactAddress?.email : "---"}
        </p>
      ),
    },
    {
      name: "Date Processed",
      selector: (row) => (
        <p
          title={
            row?.employment
              ? dateFormatter.format(new Date(row?.employment?.createdAt))
              : "---"
          }
        >
          {row?.employment
            ? dateFormatter.format(new Date(row?.employment?.createdAt))
            : "---"}
        </p>
      ),
    },
    {
      name: "Update",
      selector: (row) => (
        <>
          {row?.employment?.employmentStatus === "pending" && (
            <Link
              className="editLink"
              to={`/sensec/users/${columnObjData?.authAdmin?.uniqueId}/admin/NT-Staff/${row?.uniqueId}/nt-staff_update`}
            >
              <EditIcon />
            </Link>
          )}
        </>
      ),
    },
    {
      name: "Approve",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <>
            <HashLink
              className="approveLink"
              onClick={async () => {
                columnObjData?.setCurrentNTStaff(row?._id);
                columnObjData?.setOpenApproveEmploymentModal(true);
                columnObjData?.setOpenRejectModal(false);
              }}
            >
              {columnObjData?.foundNTStaff &&
                columnObjData?.foundNTStaff._id === row._id && (
                  <>
                    {columnObjData?.loadingComplete === false && (
                      <Box
                        className="promotionSpinner"
                        sx={{
                          marginTop: ".5rem",
                        }}
                      >
                        <p>Processing</p>
                        {/* <CircularProgress style={{ color: "#555" }} size={"1.3em"} /> */}
                        <span className="dot-ellipsis">
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                          <span className="dot">.</span>
                        </span>
                      </Box>
                    )}
                    {columnObjData?.loadingComplete &&
                      columnObjData?.approveEmploymentStatus === "success" && (
                        <>
                          <span>Approved</span> <TaskAltIcon />
                        </>
                      )}
                  </>
                )}
              <>
                {columnObjData?.loadingComplete === null && (
                  <HowToRegIcon
                    titleAccess="Approve Employment"
                    style={{ fontSize: "2rem" }}
                  />
                )}
                {row?._id !== columnObjData?.foundNTStaff?._id &&
                  columnObjData?.loadingComplete !== null && (
                    <HowToRegIcon
                      titleAccess="Approve Employment"
                      style={{ fontSize: "2rem" }}
                    />
                  )}
              </>
            </HashLink>
            {columnObjData?.foundNTStaff &&
              columnObjData?.foundNTStaff?._id === row?._id && (
                <ApprovalModal
                  open={columnObjData?.openApproveEmploymentModal}
                  onClose={async () =>
                    columnObjData?.setOpenApproveEmploymentModal(false)
                  }
                  approvalFunction={approveEmployee({
                    employeeId: row?.uniqueId,
                    employmentApprovedBy: columnObjData?.authAdmin?.id,
                  })}
                  setLoadingComplete={columnObjData?.setLoadingComplete}
                  setSelectedUserToApprove={columnObjData?.setCurrentNTStaff}
                  selectedUserToApproveId={row?._id}
                  userDataToApprove={columnObjData?.foundNTStaff}
                  userDataToReject={columnObjData?.nTStaffToReject}
                />
              )}
          </>
        ),
    },
    {
      name: "Reject",
      selector: (row) =>
        row?.employment?.employmentStatus === "pending" && (
          <HashLink
            className="rejectLink"
            onClick={async () => {
              columnObjData?.setRejectNTStaff(row?._id);
              columnObjData?.setOpenRejectModal(true);
              columnObjData?.setOpenApproveEmploymentModal(false);
            }}
          >
            {columnObjData?.rejectLoadingComplete === null && (
              <PersonRemoveIcon
                titleAccess="Reject Employment"
                style={{ fontSize: "2rem" }}
              />
            )}
            {row?._id !== columnObjData?.nTStaffToReject?._id &&
              columnObjData?.rejectLoadingComplete !== null && (
                <PersonRemoveIcon
                  titleAccess="Reject Employment"
                  style={{ fontSize: "2rem" }}
                />
              )}
            {columnObjData?.nTStaffToReject &&
              columnObjData?.nTStaffToReject._id === row._id && (
                <>
                  {columnObjData?.rejectLoadingComplete === false && (
                    <Box
                      className="promotionSpinner"
                      sx={{
                        marginTop: ".5rem",
                      }}
                    >
                      <p>Processing</p>
                      {/* <CircularProgress style={{ color: "#555" }} size={"1.3em"} /> */}
                      <span className="dot-ellipsis">
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                        <span className="dot">.</span>
                      </span>
                    </Box>
                  )}
                  {columnObjData?.rejectLoadingComplete &&
                    columnObjData?.rejectEmploymentStatus === "success" && (
                      <>
                        <span>Rejected</span> <TaskAltIcon />
                      </>
                    )}
                  <RejectionModal
                    open={columnObjData?.openRejectModal}
                    onClose={async () =>
                      columnObjData?.setOpenRejectModal(false)
                    }
                    rejectionFunction={rejectEmployee({
                      employeeId: row?.uniqueId,
                      employmentRejectedBy: columnObjData?.authAdmin?.id,
                    })}
                    setLoadingComplete={columnObjData?.setRejectLoadingComplete}
                    setSelectedUserToReject={columnObjData?.setRejectNTStaff}
                    selectedUserToRejectId={row?._id}
                    userDataToApprove={columnObjData?.foundNTStaff}
                    userDataToReject={columnObjData?.nTStaffToReject}
                  />
                </>
              )}
          </HashLink>
        ),
    },
  ];
  return nTStaffsDataFormat;
};
const graduatesColumn = () => {
  const graduatesColumn = [
    {
      name: "Image",
      selector: (row) =>
        row?.personalInfo?.profilePicture ? (
          <HashLink
            to={`/sensec/admin/student_info/${row?.personalInfo?.firstName.replace(
              / /g,
              "_"
            )}_${row?.personalInfo?.lastName}/${row?.uniqueId}#studentInfo`}
            title="View Student Info"
          >
            <img
              className="studentImg"
              src={
                row?.personalInfo?.profilePicture
                  ? row?.personalInfo?.profilePicture.url
                  : "/assets/noAvatar.png"
              }
              alt=""
            />
          </HashLink>
        ) : (
          <HashLink
            className="noImgLink"
            to={`/sensec/admin/student_info/${row?.personalInfo?.firstName}_${row?.personalInfo?.lastName}/${row?.personalInfo?.uniqueId}/#studentInfo`}
            title="View Student Info"
          >
            {row?.personalInfo?.gender === "Male" && (
              <img
                className="studentImg"
                src={"/assets/maleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "Female" && (
              <img
                className="studentImg"
                src={"/assets/femaleAvatar.png"}
                alt=""
              />
            )}
            {row?.personalInfo?.gender === "" && (
              <div className="noImg">
                <p>No</p>
                <p>Image</p>
              </div>
            )}
          </HashLink>
        ),
    },
    {
      name: "First Name",
      selector: (row) => row?.personalInfo?.firstName,
      sortable: true,
    },
    { name: "Surname", selector: (row) => row?.personalInfo?.lastName },
    {
      name: "Date Of Birth",
      selector: (row) =>
        row?.personalInfo?.dateOfBirth
          ? dateFormatter.format(new Date(row?.personalInfo?.dateOfBirth))
          : "---",
    },
    {
      name: "Program",
      selector: (row) =>
        row?.studentSchoolData?.program
          ? row?.studentSchoolData?.program.name
          : "---",
    },
    {
      name: "Student-ID",
      selector: (row) => row?.uniqueId,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) =>
        row?.contactAddress?.email ? row?.contactAddress?.email : "---",
    },
    {
      name: "Contact Number",
      selector: (row) =>
        row?.contactAddress?.mobile ? row?.contactAddress?.mobile : "---",
    },
    {
      name: "Year Graduated",
      selector: (row) =>
        row?.studentStatusExtend?.yearGraduated
          ? row?.studentStatusExtend?.yearGraduated
          : "---",
    },
    {
      name: "Batch",
      selector: (row) =>
        row?.studentSchoolData?.batch?.yearRange
          ? row?.studentSchoolData?.batch?.yearRange
          : "---",
    },
    {
      name: "Graduate",
      selector: (row) =>
        row?.studentStatusExtend?.isGraduated && (
          <div className="isGraduated" title="Graduated">
            <SchoolOutlinedIcon />
          </div>
        ),
    },
  ];
  return graduatesColumn;
};

export {
  adminsColumn,
  //   hangingAdminsColumn,
  pendingAdminsColumn,
  teachersColumn,
  pendingTeachersColumn,
  //   hangingTeachersColumn,
  studentsColumn,
  pendingStudentsColumn,
  //   courseMatesColumn,
  //   hangingEmploymentsColumn,
  graduatesColumn,
  nTStaffsColumn,
  pendingNTStaffsColumn,
  //   hangingNTStaffsColumn,
};