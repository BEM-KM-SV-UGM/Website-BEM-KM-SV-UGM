import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Login Admin",
};

// TODO: implementasi autentikasi admin (menunggu backend).

export default function AdminLoginPage() {
  return (
    <>
      <PageHeader title="Login Admin" />
      <form>
        <Input id="admin-username" name="username" label="Username" required />
        <Input
          id="admin-password"
          name="password"
          type="password"
          label="Password"
          required
        />
        <Button type="submit">Masuk</Button>
      </form>
    </>
  );
}
