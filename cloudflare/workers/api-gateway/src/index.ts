export interface Env {
    MODEL_STORAGE: R2Bucket;
    ARTIFACT_STORAGE: R2Bucket;
    PROJECT_NAME: string;
}

export default {
    async fetch(
        request: Request,
        env: Env
    ): Promise<Response> {
        const url = new URL(request.url);

        /*
        Health endpoint
        */

        if (url.pathname === "/health") {
            return Response.json({
                status: "ok",
                project: env.PROJECT_NAME,
                timestamp:
                    new Date().toISOString()
            });
        }

        /*
        Model metadata example
        */

        if (url.pathname === "/models") {
            const objects =
                await env.MODEL_STORAGE.list();
            return Response.json({
                models:
                    objects.objects.map(
                        x => x.key
                    )
            });

        }

        /*
        Backend forwarding
        */

        const backend =
            "https://runtime.cogosphere.org";

        return fetch(
            backend +
            url.pathname,
            {
                method:
                    request.method,
                headers:
                    request.headers,
                body:
                    request.body
            }
        );
    }
};