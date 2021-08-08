module Api
  module V1
    class ComicsController < ApplicationController

      def index
        default_params = {
          offset: 0,
          limit: 15,
          order_by_field: 'releaseDate',
          order_by_direction: 'desc'
        }

        client_params = params
                          .with_defaults(default_params)
                          .permit(
                            :offset,
                            :limit,
                            :order_by_field,
                            :order_by_direction,
                            :characters_ids
                          )

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
