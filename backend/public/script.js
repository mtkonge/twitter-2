const title = document.getElementById("title")
const content = document.getElementById("content")
const createPostButton = document.getElementById("createpost")


createPostButton.addEventListener("click", async () => {

    const data = {
        title: title.value,
        content: content.value
    }
    
    const res = await sendPostRequest("/api/createpost", data);
    const body = await res.json();

    window.location.pathname = "/";
});