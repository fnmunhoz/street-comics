module Api
  module V1
    class ComicsController < ApplicationController

      def index
        default_params = {
          offset: 0,
          limit: 15,
        }

        client_params = params
                          .with_defaults(default_params)
                          .permit(:offset, :limit)

        response = client.comics(client_params)

        render json: response.body, status: 200
      end

      private

      def client
        provider = params.fetch(:provider)
        ComicsApi::V1::Client.new(provider)
      end
    end

  end
end
