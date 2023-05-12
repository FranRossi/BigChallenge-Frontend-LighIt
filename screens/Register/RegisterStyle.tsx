import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d9bf1",
    alignItems: "center",
  },
  form: {
    marginTop: 140,
    width: 280,
  },
  error: {
    color: "red",
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
  registerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084b3",
    padding: 12,
    borderRadius: 5,
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
  },
  loginPageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  loginText: {
    fontSize: 14,
  },
  loginTextLink: {
    fontSize: 14,
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
  loadingIndicator: {
    marginRight: 18,
  },
});

export default styles;
