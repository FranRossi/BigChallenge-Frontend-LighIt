import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d9bf1",
    alignItems: "center",
  },
  form: {
    marginTop: 280,
    width: 280,
  },
  error: {
    color: "red",
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
  },
  loginButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084b3",
    padding: 12,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
  registerPageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  registerText: {
    fontSize: 14,
  },
  registerTextLink: {
    fontSize: 14,
    color: "white",
    textDecorationLine: "underline",
  },
  mt4: {
    marginTop: 16,
  },
  mt5: {
    marginTop: 22,
  },
  activityIndicator: {
    marginRight: 18,
  },
});

export default styles;
