document.addEventListener("DOMContentLoaded", () => {
    // 본인의 실제 이메일 주소를 입력하세요
    const myEmail = "jaehyun.dev@example.com"; 
    const copyEmailBtn = document.getElementById("copy-email");

    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", (e) => {
            e.preventDefault(); // 링크 이동 방지
            
            // 클립보드에 이메일 복사
            navigator.clipboard.writeText(myEmail).then(() => {
                // 복사 성공 시 텍스트 변경
                const originalText = copyEmailBtn.innerText;
                copyEmailBtn.innerText = "✅ 복사 완료!";
                copyEmailBtn.style.color = "#38bdf8"; 
                
                // 2초 뒤에 원래 텍스트로 복구
                setTimeout(() => {
                    copyEmailBtn.innerText = originalText;
                    copyEmailBtn.style.color = ""; 
                }, 2000);
            }).catch(err => {
                console.error("이메일 복사 실패:", err);
                alert("이메일 복사에 실패했습니다. 직접 입력해주세요: " + myEmail);
            });
        });
    }
});