export default {
    customers: [],
    overlay: false,
    pagination: [],
    rules: {
        min_3: v => (v || '').length >= 3 || "MINIMO 3 (TRES) CARACTERES",
    }
}
