import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084b3",
    padding: 12,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
    backgroundColor: "#1d9bf1",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  error: {
    color: "red",
  },
  updateButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0084b3",
    padding: 12,
    borderRadius: 5,
  },
  updateButtonText: {
    color: "white",
    fontSize: 16,
  },
  mt5: {
    marginTop: 30,
  },
});

export default styles;
