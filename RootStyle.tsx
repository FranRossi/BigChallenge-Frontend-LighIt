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
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    marginHorizontal: 10,
    borderRadius: 5,
  },
  drawerItemListContainer: { flex: 1 },
  userNameAndLogoutView: {
    paddingLeft: 12,
  },
  userInitialView: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  userInitial: { color: "white", fontSize: 16 },
  userName: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  logoutText: {
    color: "white",
    fontSize: 14,
    marginVertical: 4,
  },
});

export default styles;
