const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment").value.trim();
  const post_id = document.querySelector("#post_id").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();

  if (content) {
    const body = JSON.stringify({ content, post_id, user_id });

    const response = await fetch("/api/comments", {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to comment.");
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
