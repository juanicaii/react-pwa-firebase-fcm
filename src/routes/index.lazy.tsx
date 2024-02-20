import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@venedicto/ui-library";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="h-dvh bg-primary flex relative w-full mx-auto justify-center items-center">
			<div>
				<img
					src="https://red-bush-0ce59ec0f.3.azurestaticapps.net/assets/logo-fleetbooster-fb50f32e.png"
					alt="logo"
					className="h-52 w-52 mb-56"
				/>
			</div>
			<div className="w-full mx-auto justify-center flex absolute bottom-16 flex-col gap-4 items-center">
				<Button
					className="w-4/6 py-3 border-none rounded-full !bg-secondary text-white text-lg"
					variants="default"
				>
					<Link to="/auth/sign-in">Iniciar sesiÃ³n</Link>
				</Button>
				<Button
					className="w-4/6 py-3 border-none rounded-full !bg-secondary text-white text-lg"
					variants="default"
				>
					<Link to="/auth/sign-up">Registrarse</Link>
				</Button>
			</div>
		</div>
	);
}
