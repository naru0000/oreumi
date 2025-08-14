import { useActionState } from "react";

export default function loginForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const userName = formData.get("userName");
      const password = formData.get("password");

      if (!userName || !password) {
        return {
          success: false,
          message: "아이디와 비밀번호를 모두 입력해주세요.",
        };
      }

      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            password: password,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          return {
            success: true,
            message: `로그인 성공! ${result.user.userName}님 환영합니다.`,
          };
        } else {
          return {
            success: false,
            message: result.message || "로그인에 실패했습니다.",
          };
        }
      } catch (error) {
        return {
          success: false,
          message: `서버 연결 실패 ${error.message}`,
        };
      }
    },
    { success: false, message: "" }
  );

  return (
    <div>
      <h2>로그인</h2>
      <form action={formAction}>
        <div>
          <label htmlFor="userName">
            아이디:
            <input
              id="userName"
              type="text"
              name="userName"
              placeholder="아이디를 입력하세요"
              disabled={isPending}
              required
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            비밀번호:
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              disabled={isPending}
              required
            />
          </label>
        </div>

        <div>
          <button type="submit" disabled={isPending}>
            {isPending ? "로그인 중..." : "로그인"}
          </button>
          <button type="reset" disabled={isPending}>
            초기화
          </button>
        </div>
      </form>
      {state.message && (
        <div>
          <p>{state.message}</p>
        </div>
      )}
    </div>
  );
}
