module ComicsApi
  module V1
    class Client

      attr_reader :client
      attr_reader :request_adapter
      attr_reader :response_adapter

      def initialize(provider)
        @client = find_client(provider)
        @request_adapter = find_request_adapter(provider)
        @response_adapter = find_response_adapter(provider)
      end

      def comics(params)
        client_params = request_adapter.comics(params)
        response = client.comics(client_params)
        response_adapter.comics(response)
      end

      private

      def find_client(provider)
        find_service(provider, :client)
      end

      def find_request_adapter(provider)
        find_service(provider, :request_adapter)
      end

      def find_response_adapter(provider)
        find_service(provider, :response_adapter)
      end

      def find_service(provider, service, args = nil)
        clazz = find_service_class(provider, service)
        clazz.new(args)
      end

      def find_service_class(provider, service)
        mapping
          .fetch(provider.to_sym) { raise('invalid provider') }
          .fetch(service.to_sym) { raise('invalid service') }
      end

      def mapping
        {
          marvel: {
            client: MarvelApi::V1::Client,
            request_adapter: Adapters::Marvel::RequestAdapter,
            response_adapter: Adapters::Marvel::ResponseAdapter,
          }
        }
      end
    end
  end
end