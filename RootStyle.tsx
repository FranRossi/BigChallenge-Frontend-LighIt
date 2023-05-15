import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 50,
    backgroundColor: "#0084b3",
  },
  logoutContainer: {
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  userNameAndLogoutView: {
    paddingLeft: 12,
  },
  userName: {
    color: "white",
    fontSize: 14,
  },
  logout: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default styles;
