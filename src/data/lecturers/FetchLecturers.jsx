import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, getAllUsers } from "../../features/auth/authSlice";

const FetchAllLecturers = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(getAllUsers);
  const allLecturers = allUsers?.filter(
    (user) => user?.roles?.includes("Lecturer") && user
  );

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return allLecturers;
};

const FetchAllEmployedLecturers = () => {
  const allLecturers = FetchAllLecturers();
  const allEmployedLecturers = allLecturers?.filter(
    (user) => user?.employment?.employmentStatus === "approved" && user
  );

  return allEmployedLecturers;
};
const FetchAllPendingLecturers = () => {
  const allLecturers = FetchAllLecturers();
  const allPendingLecturers = allLecturers?.filter(
    (user) => user?.employment?.employmentStatus === "pending" && user
  );

  return allPendingLecturers;
};
const FetchAllClassLevelLecturers = (class_Level) => {
  const allLecturers = FetchAllEmployedLecturers();
  const allClassLevelLecturers = allLecturers?.filter(
    (user) =>
      user?.lecturerSchoolData?.classLevels?.includes(class_Level) && user
  );

  return allClassLevelLecturers;
};
const FetchAllClassSectionLecturers = (class_Level) => {
  const allLecturers = FetchAllEmployedLecturers();
  const allClassSectionLecturers = allLecturers?.filter(
    (user) =>
      user?.lecturerSchoolData?.classLevelHandling?._id === class_Level && user
  );

  return allClassSectionLecturers;
};
const FetchProgrammeLecturers = (programmeFound) => {
  const allLecturers = FetchAllEmployedLecturers();
  const allClassSectionLecturers = allLecturers?.filter(
    (user) => user?.lecturerSchoolData?.program?._id === programmeFound
  );

  return allClassSectionLecturers;
};

export {
  FetchAllLecturers,
  FetchAllEmployedLecturers,
  FetchAllPendingLecturers,
  FetchAllClassLevelLecturers,
  FetchAllClassSectionLecturers,
  FetchProgrammeLecturers,
};
