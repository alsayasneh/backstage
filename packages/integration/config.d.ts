/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  /** Configuration for integrations towards various external repository provider systems */
  integrations?: {
    /** Integration configuration for Azure */
    azure?: Array<{
      /**
       * The hostname of the given Azure instance
       * @visibility frontend
       */
      host: string;
      /**
       * Token used to authenticate requests.
       * @visibility secret
       */
      token?: string;
    }>;

    /**
     * Integration configuration for Bitbucket
     * @deprecated replaced by bitbucketCloud and bitbucketServer
     */
    bitbucket?: Array<{
      /**
       * The hostname of the given Bitbucket instance
       * @visibility frontend
       */
      host: string;
      /**
       * Token used to authenticate requests.
       * @visibility secret
       */
      token?: string;
      /**
       * The base url for the Bitbucket API, for example https://api.bitbucket.org/2.0
       * @visibility frontend
       */
      apiBaseUrl?: string;
      /**
       * The username to use for authenticated requests.
       * @visibility secret
       */
      username?: string;
      /**
       * Bitbucket app password used to authenticate requests.
       * @visibility secret
       */
      appPassword?: string;
    }>;

    /** Integration configuration for Bitbucket Cloud */
    bitbucketCloud?: Array<{
      /**
       * The username to use for authenticated requests.
       * @visibility secret
       */
      username: string;
      /**
       * Bitbucket Cloud app password used to authenticate requests.
       * @visibility secret
       */
      appPassword: string;
    }>;

    /** Integration configuration for Bitbucket Server */
    bitbucketServer?: Array<{
      /**
       * The hostname of the given Bitbucket Server instance
       * @visibility frontend
       */
      host: string;
      /**
       * Token used to authenticate requests.
       * @visibility secret
       */
      token?: string;
      /**
       * The base url for the Bitbucket Server API, for example https://<host>/rest/api/1.0
       * @visibility frontend
       */
      apiBaseUrl?: string;
    }>;

    /** Integration configuration for Gerrit */
    gerrit?: Array<{
      /**
       * The hostname of the given Gerrit instance
       * @visibility frontend
       */
      host: string;
      /**
       * The base url for the Gerrit instance.
       * @visibility frontend
       */
      baseUrl?: string;
      /**
       * The username to use for authenticated requests.
       * @visibility secret
       */
      username?: string;
      /**
       * Gerrit password used to authenticate requests. This can be either a password
       * or a generated access token.
       * @visibility secret
       */
      password?: string;
    }>;

    /** Integration configuration for GitHub */
    github?: Array<{
      /**
       * The hostname of the given GitHub instance
       * @visibility frontend
       */
      host: string;
      /**
       * Token used to authenticate requests.
       * @visibility secret
       */
      token?: string;
      /**
       * The base url for the GitHub API, for example https://api.github.com
       * @visibility frontend
       */
      apiBaseUrl?: string;
      /**
       * The base url for GitHub raw resources, for example https://raw.githubusercontent.com
       * @visibility frontend
       */
      rawBaseUrl?: string;

      /**
       * GitHub Apps configuration
       * @visibility backend
       */
      apps?: Array<{
        /**
         * The numeric GitHub App ID, string for environment variables
         */
        appId: number | string;
        /**
         * The private key to use for auth against the app
         * @visibility secret
         */
        privateKey: string;
        /**
         * The secret used for webhooks
         * @visibility secret
         */
        webhookSecret: string;
        /**
         * The client ID to use
         */
        clientId: string;
        /**
         * The client secret to use
         * @visibility secret
         */
        clientSecret: string;
      }>;
    }>;

    /** Integration configuration for GitLab */
    gitlab?: Array<{
      /**
       * The host of the target that this matches on, e.g. "gitlab.com".
       *
       * @visibility frontend
       */
      host: string;
      /**
       * The base URL of the API of this provider, e.g.
       * "https://gitlab.com/api/v4", with no trailing slash.
       *
       * May be omitted specifically for public GitLab; then it will be deduced.
       *
       * @visibility frontend
       */
      apiBaseUrl?: string;
      /**
       * The authorization token to use for requests to this provider.
       *
       * If no token is specified, anonymous access is used.
       *
       * @visibility secret
       */
      token?: string;
      /**
       * The baseUrl of this provider, e.g. "https://gitlab.com", which is
       * passed into the GitLab client.
       *
       * If no baseUrl is provided, it will default to https://${host}.
       *
       * @visibility frontend
       */
      baseUrl?: string;
    }>;

    /** Integration configuration for Google Cloud Storage */
    googleGcs?: {
      /**
       * Service account email used to authenticate requests.
       * @visibility backend
       */
      clientEmail?: string;
      /**
       * Service account private key used to authenticate requests.
       * @visibility secret
       */
      privateKey?: string;
    };

    /** Integration configuration for AWS S3 Service */
    awsS3?: Array<{
      /**
       * AWS Endpoint.
       * The endpoint URI to send requests to. The default endpoint is built from the configured region.
       * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
       *
       * Supports non-AWS providers, e.g. for LocalStack, endpoint may look like http://localhost:4566
       * @visibility frontend
       */
      endpoint?: string;

      /**
       * Whether to use path style URLs when communicating with S3.
       * Defaults to false.
       * This allows providers like LocalStack, Minio and Wasabi (and possibly others) to be used.
       * @visibility frontend
       */
      s3ForcePathStyle?: boolean;

      /**
       * Account access key used to authenticate requests.
       * @visibility backend
       */
      accessKeyId?: string;
      /**
       * Account secret key used to authenticate requests.
       * @visibility secret
       */
      secretAccessKey?: string;

      /**
       * ARN of the role to be assumed
       * @visibility backend
       */
      roleArn?: string;

      /**
       * External ID to use when assuming role
       * @visibility backend
       */
      externalId?: string;
    }>;
  };
}
