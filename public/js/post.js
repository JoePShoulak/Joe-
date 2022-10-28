const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();

  if (content) {
    const body = JSON.stringify({ title, content, user_id });

    const response = await fetch("/api/posts", {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to comment.");
    }
  }
};

document
  .querySelector(".post-form")
  .addEventListener("submit", postFormHandler);
