import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d9bf1",
    alignItems: "center",
  },
  checkBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: 5,
  },
  label: {
    margin: 5,
  },
  inputBox: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
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
  },
  registerText: {
    fontSize: 12,
  },
  registerTextLink: {
    fontSize: 12,
    color: "white",
    textDecorationLine: "underline",
  },
  textAlignCenter: {
    textAlign: "center",
  },
  mt4: {
    marginTop: 16,
  },

  mt5: {
    marginTop: 22,
  },
});

export default styles;
