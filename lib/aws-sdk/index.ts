const { env } = process;

const region = env.AWS_SDK_REGION!;
const credentials = {
  accessKeyId: env.AWS_SDK_ACCESS_KEY_ID!,
  secretAccessKey: env.AWS_SDK_SECRET_ACCESS_KEY!,
};

export { region, credentials };
