export const localeLangGet = state => {
    console.log(3)
    state.localeLang = localStorage.getItem("locale");
    console.log(state.localeLang)
    return state.localeLang 
}