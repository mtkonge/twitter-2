const title = document.getElementById("title")
const content = document.getElementById("content")
const createPostButton = document.getElementById("createpost")


createPostButton.addEventListener("click", async () => {

    const data = {
        title: title.value,
        content: content.value
    }
    console.log(data)
    const res = await sendPostRequest("/api/createpost", data);
    console.log(res)
    const body = await res.json();

    window.location.pathname = "/";
});