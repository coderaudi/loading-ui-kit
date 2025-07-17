"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.tsx
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Loading = ({ loading, textBelowLoadingCircle, logoInsideLoadingCircle, }) => {
    if (!loading)
        return null;
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.loadingCircle }, logoInsideLoadingCircle || react_1.default.createElement(react_native_1.ActivityIndicator, { size: "large", color: "#0000ff" })),
        textBelowLoadingCircle && (react_1.default.createElement(react_native_1.Text, { style: styles.loadingText }, textBelowLoadingCircle))));
};
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 16,
        color: '#333',
    },
});
exports.default = Loading;
