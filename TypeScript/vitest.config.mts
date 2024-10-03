import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["test/*.test.ts"],
        coverage: {
            provider: "istanbul",
            reportsDirectory: "coverage/",
            reporter: ["lcov", 'text'],
            include: ["src/"],
        },
    }
});