import type { Preview } from "@storybook/react";
import { handlers } from "@tests/utils/handlers";
import { initialize, mswLoader } from "msw-storybook-addon";
import { ModeDecorator } from "@/storybook/utils";

import "../src/index.css";

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" }, handlers);

export default {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [ModeDecorator],
	// Provide the MSW addon loader globally
	loaders: [mswLoader],
} satisfies Preview;
