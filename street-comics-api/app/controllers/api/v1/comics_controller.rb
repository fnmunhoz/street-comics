module Api
  module V1
    class ComicsController < ApplicationController

      def index
        default_params = {
          offset: 0,
          limit: 15,
        }

        response = client.comics(params.with_defaults(default_params))

        render json: response, status: 200
      end

      private

      def client
        provider = params.fetch(:provider)
        ComicsApi::V1::Client.new(provider)
      end
    end

  end
end
